---
title: "DSBRouter: End-to-end Global Routing via Diffusion Schr\\\"{o}dinger Bridge"
title_zh: DSBRouter：基于扩散薛定谔桥的端到端全局布线
authors: "Liangliang Shi, Shenhui Zhang, Xingbo Du, Nianzu Yang, Junchi Yan"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Rxa6fWKces"
tags: ["query:diff-bridge"]
score: 8.0
evidence: 明确使用扩散薛定谔桥在初始引脚与布线之间建立映射
tldr: 针对芯片设计全局布线中缺乏连通性保证的问题，本文提出 DSBRouter，利用扩散薛定谔桥模型在初始引脚与布线之间建立双向映射。训练时学习从引脚状态到完整布线的正反向转换，推理时结合评价指标生成低过载的合法布线。实验表明方法能端到端保证连通性，无需后处理，为芯片布线提供了新的生成式解决方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-rxa6fwkces/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 861, \"height\": 585, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rxa6fwkces/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1596, \"height\": 815, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rxa6fwkces/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1594, \"height\": 954, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rxa6fwkces/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 644, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rxa6fwkces/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1582, \"height\": 652, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-rxa6fwkces/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1696, \"height\": 258, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rxa6fwkces/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1238, \"height\": 558, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rxa6fwkces/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1733, \"height\": 561, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rxa6fwkces/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 827, \"height\": 251, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rxa6fwkces/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 564, \"height\": 330, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rxa6fwkces/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1726, \"height\": 294, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rxa6fwkces/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1419, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rxa6fwkces/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1724, \"height\": 393, \"label\": \"Table\"}]"
motivation: 现有布线方法缺乏连通性保证，需额外强化学习或后处理。
method: 利用扩散薛定谔桥模型学习引脚与布线之间的正反向映射，实现端到端生成。
result: 在全局布线任务中生成低过载且连通性完整的合法布线。
conclusion: 扩散薛定谔桥可有效解决布线连通性问题，避免复杂后处理。
---

## Abstract
Global routing (GR) is a fundamental task in modern chip design and various learning techniques have been devised. However, a persistent challenge is the inherent lack of a mechanism to guarantee the routing connectivity in network's prediction results, necessitating post-processing search or reinforcement learning (RL) to enforce the connectivity. In this paper, we propose a neural GR solver called DSBRouter, leveraging the Diffusion Schr\"{o}dinger Bridge (DSB) model for GR. During training, unlike previous works that learn the mapping from noise to routes, we establish a bridge between the initial pins and the routing via DSB, which learns the forward and backward mapping between them. For inference, based on the evaluation metric (e.g. low overflow), we further introduce a sampling scheme with evaluation-based guidance to enhance the routing predictions. Note that DSBRouter is an end-to-end model that does not require a post-step to ensure connectivity. Empirical results show that it achieves SOTA performance on the overflow reduction in ISPD98 and part of ISPD07. In some cases, DSBRouter can even generate routes with zero overflow.

---

## 论文详细总结（自动生成）

# DSBRouter：基于扩散薛定谔桥的端到端全局布线 详细总结

## 1. 核心问题与整体含义
- **研究动机**：在超大规模集成电路（VLSI）设计中，全局布线（GR）是一项基本且耗时的任务。近年来，各类机器学习方法被用于该任务，但一个长期存在的挑战是：这些方法生成的布线结果缺乏**连通性保证**，往往需要额外的后处理搜索（如启发式算法）或强化学习（RL）来强制形成连通的布线。
- **核心问题**：能否设计一个**端到端**的学习模型，直接从初始引脚（pins）分布生成高质量且**连通性完整的布线**，而无需任何后处理步骤？
- **本文方案**：提出 **DSBRouter**，首次将 **扩散薛定谔桥（Diffusion Schrödinger Bridge, DSB）** 模型引入全局布线，建立引脚分布与布线分布之间的双向映射，并在推理阶段结合评价指标（低过载）的梯度引导，直接输出合法、过载极低的布线。

## 2. 方法论
### 2.1 扩散薛定谔桥建模
- 将全局布线问题形式化为两个边际分布之间的最优传输问题：**引脚分布 \(p_s\)** 与**布线分布 \(p_r\)**。
- 采用 DSB 框架，学习从 \(p_s\) 到 \(p_r\) 和从 \(p_r\) 到 \(p_s\) 的双向转换过程。这与以往仅学习从噪声到布线的生成模型有本质区别。
- 利用迭代比例拟合（IPF）思想，将联合密度优化分解为条件密度优化，并通过**终端重参数化的 DSB** 训练两个 U-ViT 网络来分别逼近前向漂移 \(F_{\theta_2}\) 和后向漂移 \(B_{\theta_1}\)。损失函数基于预测路径与真实路径的差异（式 5）。
- 推理时，专注于后向过程（即从引脚到达布线），使用条件高斯采样：\(x_k \sim \mathcal{N}(x_k; \mu_{k+1}(x_{k+1}, x_0), \sigma_{k+1} I)\)，其中 \(\mu\) 与 \(\sigma\) 由式 6 给出。

### 2.2 评价驱动的梯度引导
- 为在推理时直接优化过载（overflow）和线长（wirelength），引入**基于评价的引导（evaluation-based guidance）**。
- 定义最优目标分数 \(g^*\)，希望采样 \(x_k \sim p_\theta(x_k|x_{k+1}, g^*)\)。通过**命题 3.1** 将该条件分布分解为无引导的采样概率与 \(p(g^*|x_k)\) 的乘积。
- 为估计 \(p(g^*|x_k)\)，使用能量模型和泰勒展开在 \(x_{k+1}\) 处近似，得到 \(p(g^*|x_k) \propto \exp\left( \nabla_{x_{k+1}} \log p(g^*|x_{k+1})^\top x_k \right)\)。
- 能量函数定义（式 11）为预测路由的期望过载与当前路由过载的差距 \(\mathbb{E}_{o} - O\)，即模型试图逼近一个过载更低的目标状态。
- 在实际实现中，通过 **算法 1** 根据当前预测路由构建 Steiner 图并生成期望路由 \(S_1\)，进而计算能量梯度和修正采样，从而逐步引导布线向低过载方向演化。

## 3. 实验设计
- **数据集**：
  - **训练集**：使用 ISPD07 基准中的部分案例（bigblue4, newblue4, newblue5, newblue6, newblue7），由 nthu-route 2.0 产生低过载的专家布线作为目标分布 \(p_r\)。图像尺寸固定为 64×64。
  - **测试集**：
    - ISPD07 中未见过的案例（newblue1, newblue2, bigblue1, bigblue2），分为 small‑4、small、large‑4、large 四组。
    - ISPD98 基准（ibm01–ibm05）与 ISPD07 的 adaptec3、adaptec4 两个大规模案例。
- **比较方法**：
  - 传统路由器：GeoSteiner、Labyrinth、FLUTE+边缘移位（ES）。
  - 基于学习的方法：HubRouter 的三种生成变体（VAE, GAN, DPM）、NeuralSteiner。
  - 特别设计了**无 RL 后处理的 HubRouter 对比**，以专门评估生成模型的连通性。
- **评估指标**：
  - 针对连通性：**正确率（Crrt）**，即所有引脚被连通到同一布线中的比例；**连通率**。
  - 针对布线质量：**线长比（WLR）**、**线长（WL）**、**过载（OF）**。
  - **生成时间**。

## 4. 资源与算力
- 论文中明确提及：训练在配备 **8 块 NVIDIA H800 GPU**、2.0TB 内存的服务器上进行；所有测试实验在 **8 块 NVIDIA RTX 4090 GPU**、460GB 内存的机器上完成。
- 未给出精确的训练总时长或总 GPU 小时数，但从推理时间（见表 6，ibm01 需 4491 秒，ada04 需约 125589 秒）可看出整体计算开销较大。

## 5. 实验数量与充分性
- **实验组数**：
  - 连通性与线长对比：4 组测试案例（small‑4, small, large‑4, large）与 3 个 HubRouter 变体对比。
  - ISPD98 与 ISPD07 上主流方法对比：7 个测试案例（5 个 IBM 案例 + 2 个 Adaptec 案例）与 6 种方法（含传统与学习型）进行 WL 和 OF 比较。
  - 消融实验：在 ibm01 上分别移除了梯度引导（GD）模块和神经网络输出（NN），观察 OF 和 WL 变化。
  - 推理步数影响：在 ibm01 上用 10、24、50 步推理及不同训练深度组合，分析时间、OF、WL 的变化。
- **充分性与公平性**：实验覆盖了学习型和传统型多种基线，指标设计合理，消融实验有助于理解各模块作用。但推理时间较长，与部分强基线的比较依赖于论文原有报告数据（如 NeuralSteiner 部分结果），且大规模案例（ada03/04）上 DSBRouter 线长明显偏高，说明在泛化到更大规模时尚有不足。

## 6. 主要结论与发现
- DSBRouter 是**首个无需任何后处理**、可端到端生成 100% 连通布线的学习型路由器。
- 在 ISPD98 和部分 ISPD07 基准上，**过载降低效果达到 SOTA**，平均减少约 90.4%，并且在 ibm02、ibm05、ada03、ada04 等案例中实现了**零过载**。
- 梯度引导模块对降低过载至关重要，移除此模块后过载大幅上升；神经网络预测的路由也给引导提供了重要基础。
- 推理步数增加虽能降低过载，但会牺牲线长并大幅增加运行时间。
- 模型存在速度慢的瓶颈，难以直接应用于大规模实时场景。

## 7. 优点
- **创新性**：首次将扩散薛定谔桥引入 VLSI 全局布线，利用了双向映射的优势。
- **端到端与连通性保证**：彻底摆脱后处理或 RL，简化了设计流程并保证了结果的可布线性。
- **评价驱动优化**：巧妙利用能量模型与泰勒展开，将评价指标（过载）的梯度直接作用于采样过程，使生成过程对齐优化目标。
- **实验详尽**：不仅与多类基线对比，还进行了模块消融和推理步数分析，验证了方法组件的有效性。

## 8. 不足与局限
- **推理时间极长**：DSB 需要大量推理步数，且每步均需计算期望路由和能量梯度，导致在大规模芯片上耗时过长（如 ada04 超过 34 小时），远高于其他方法。
- **不能直接应用加速采样**：由于噪声调度非单调及有意义的边际分布限制，DDIM 等常用扩散模型加速技术无法直接移植。
- **线长在大规模案例上恶化**：为了追求低过载，梯度引导会迫使布线绕行，导致在 ada03、ada04 上线长显著增加（相对 NeuralSteiner 高出 2 倍以上），需要权衡。
- **数据集规模局限**：训练图像固定为 64×64，处理远超训练分布的大规模引脚网络（如 ada03 的 HPWL 超 2000）时会泛化不足。
- **计算成本高**：依赖多 GPU 的多步采样和梯度回传，难以在资源受限的环境中部署。

（完）
