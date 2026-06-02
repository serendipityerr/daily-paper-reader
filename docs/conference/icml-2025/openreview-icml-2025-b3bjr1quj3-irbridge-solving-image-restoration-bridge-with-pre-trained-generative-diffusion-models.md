---
title: "IRBridge: Solving Image Restoration Bridge with Pre-trained Generative Diffusion Models"
title_zh: IRBridge：利用预训练生成扩散模型解决图像恢复桥问题
authors: "Hanting Wang, Tao Jin, Wang Lin, Shulei Wang, Hai Huang, Shengpeng Ji, Zhou Zhao"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=b3bJR1quJ3"
tags: ["query:diff-bridge"]
score: 8.0
evidence: 利用预训练生成先验构建从退化到清晰图像的扩散桥
tldr: 图像恢复中的桥模型通常需为每种退化从头训练，计算成本高。IRBridge通过引入过渡方程，直接利用预训练生成扩散模型构建从退化到清晰图像的桥，无需重训，在图像恢复任务中高效且性能优越。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 853, \"height\": 383, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 837, \"height\": 378, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 788, \"height\": 478, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 771, \"height\": 897, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1753, \"height\": 516, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 852, \"height\": 280, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 852, \"height\": 547, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 848, \"height\": 258, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 861, \"height\": 328, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1653, \"height\": 575, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1618, \"height\": 559, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 581, \"height\": 777, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 578, \"height\": 774, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 577, \"height\": 776, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 579, \"height\": 775, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 576, \"height\": 776, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 574, \"height\": 774, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1411, \"height\": 372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1404, \"height\": 368, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1407, \"height\": 372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1699, \"height\": 966, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1704, \"height\": 957, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1701, \"height\": 962, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1701, \"height\": 953, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1701, \"height\": 961, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-b3bjr1quj3/fig-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1697, \"height\": 957, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1772, \"height\": 1131, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1530, \"height\": 560, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1128, \"height\": 662, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1130, \"height\": 662, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1128, \"height\": 660, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1129, \"height\": 662, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1128, \"height\": 660, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1130, \"height\": 662, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 685, \"height\": 276, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-b3bjr1quj3/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1775, \"height\": 348, \"label\": \"Table\"}]"
motivation: 现有图像恢复桥模型需针对每种退化单独训练，成本高且性能受限。
method: 提出过渡方程，使预训练生成扩散模型的状态分布与恢复初始分布匹配，实现零训练桥接。
result: 在多种图像恢复任务中达到竞争性能，大幅降低计算开销。
conclusion: IRBridge为图像恢复提供了一种高效利用预训练先验的桥模型方案。
---

## Abstract
Bridge models in image restoration construct a diffusion process from degraded to clear images. However, existing methods typically require training a bridge model from scratch for each specific type of degradation, resulting in high computational costs and limited performance. This work aims to efficiently leverage pretrained generative priors within existing image restoration bridges to eliminate this requirement. The main challenge is that standard generative models are typically designed for a diffusion process that starts from pure noise, while restoration tasks begin with a low-quality image, resulting in a mismatch in the state distributions between the two processes. To address this challenge, we propose a transition equation that bridges two diffusion processes with the same endpoint distribution. Based on this, we introduce the **IRBridge** framework, which enables the direct utilization of generative models within image restoration bridges, offering a more flexible and adaptable approach to image restoration. Extensive experiments on six image restoration tasks demonstrate that IRBridge efficiently integrates generative priors, resulting in improved robustness and generalization performance. Code will be available at GitHub.

---

## 论文详细总结（自动生成）

# IRBridge 论文结构化总结

## 1. 核心问题与整体含义（研究动机与背景）
- **核心问题**：图像恢复中的“桥模型”（Bridge Models）直接在退化图像与高质量图像之间构建扩散过程，理论上更贴合恢复任务的物理过程。但现有方法**必须为每种特定的退化类型（如去雨、去雾）单独从头训练一个桥模型**，计算成本高，且受限于数据集规模和模型容量，性能受限。
- **研究动机**：图像生成扩散模型与图像恢复桥模型拥有相同的目标分布（高质量图像分布），但生成模型通常从纯噪声出发，而恢复桥从低质量图像出发，导致中间状态分布不匹配，预训练生成模型无法直接用于恢复桥过程。
- **论文目标**：引入**过渡方程**，桥接两个具有相同终点分布的扩散过程，从而**直接利用预训练生成模型的强大先验**，无需针对每种退化从头训练恢复桥模型，实现更高效、更灵活的图像恢复。

## 2. 方法论
### 2.1 关键思想：过渡方程（Transition Equation）
假设两个扩散过程共享同一终点分布 \(P_{\text{data}}\)，其状态可统一重参数化为：
\[
x^\circ_i = f^\circ_i x_0 + b^\circ_i + \sigma^\circ_i \epsilon_1,\quad
x^*_j = f^*_j x_0 + b^*_j + \sigma^*_j \epsilon_2
\]
则状态 \(x^\circ_i\)（恢复桥）与 \(x^*_j\)（生成扩散）之间的转移可表达为：
\[
x^*_j = \alpha \cdot x^\circ_i + \beta \cdot x_0 + \gamma + \sigma \epsilon,\quad
\alpha = \sqrt{\frac{(\sigma^*_j)^2 - \sigma^2}{(\sigma^\circ_i)^2}},\;
\beta = f^*_j - \alpha f^\circ_i,\;
\gamma = b^*_j - \alpha b^\circ_i
\]
其中 \(\sigma\) 是可控噪声系数。此方程在 \(\alpha,\beta,\sigma \ge 0\) 时成立。

### 2.2 边界条件与前向/反向过渡
- **临界时间步**：当 \((\sigma^*_j / \sigma^\circ_i)^2 = (f^*_j / f^\circ_i)^2\) 时的 \(j\) 值，此时可使 \(\beta=0\) 且噪声最小。
- **前向过渡（Forward Transition）**：选 \(j > \tilde{t}_i\) 并使 \(\sigma\) 取最小正值，则 \(\beta=0\)，无需先验的 \(x_0\) 即可将恢复桥状态转换为生成扩散状态（相当于加噪），让预训练模型进行去噪估计 \(x_0\)。
- **反向过渡（Reverse Transition）**：获得估计的 \(\hat{x}_0\) 后，在 \(i-1 < \tilde{t}_j\) 且 \(\sigma=0\) 时，可将生成扩散状态确定性映射回恢复桥的下一个状态 \(x^\circ_{i-1}\)。

### 2.3 IRBridge 框架流程
1. 从退化图像开始，迭代执行：
   - 利用**前向过渡**将当前恢复桥状态 \(x^\circ_i\) 转换为 DDPM 状态 \(x^*_j\)。
   - 利用**预训练的生成扩散模型**（带 ControlNet 控制条件）预测 \(\hat{x}_0\)。
   - 利用**反向过渡**将 \(x^*_j\) 和 \(\hat{x}_0\) 转换为下一个恢复桥状态 \(x^\circ_{i-1}\)。
2. 整个过程无需训练恢复桥模型，只需训练一个轻量的条件控制模块（ControlNet）。退化图像直接被用作 ControlNet 的条件输入。

> 对于像 GOUB 这类初始噪声系数为零的桥模型，直接跳过其初始时间步即可。

## 3. 实验设计
### 3.1 任务与数据集
- **6个主流图像恢复任务**：
  - 图像去雨（Rain100H）
  - 图像去雾（RESIDE/SOTS）
  - 图像去雪（Snow100K）
  - 雨滴去除（RainDrop）
  - 低光增强（LOL）
  - 图像修复（CelebA-HQ，随机掩码）
- 额外测试：真实世界退化数据集（RealRain-1K, Snow100K 真实雪子集, RTTS）用于泛化能力评估。

### 3.2 评价指标
- 全参考：PSNR, SSIM（在 YCbCr 的 Y 通道计算）
- 感知质量：LPIPS, FID
- 真实世界评估（无参考）：MUSIQ, BRISQUE, NIQE

### 3.3 对比方法
- **从头训练的桥模型**：IR-SDE, GOUB, ResShift, RDDM, DiffUIR 等
- **基于预训练生成扩散先验的方法**：TAO, GDP
- **回归/监督方法**：WGWS-Net, PromptIR, DDRM 等

## 4. 资源与算力
- **训练成本**：训练 ControlNet 使用 **1 块 Nvidia RTX 3090 GPU**，约 **1 天**（10k 步，batch size 12）。
- **对比成本**：原 GOUB 训练需约 2.5 天（同 GPU 型号）。
- **推理效率**：100 步约 14.2 秒；25 步约 3.4 秒，性能轻微下降，但灵活性较高。

## 5. 实验数量与充分性
- 在 6 个主流任务上进行了**定量对比**（表 1），包含多个基线。
- 提供了**真实世界泛化**评估（表 4），证明预训练先验带来的域外泛化能力。
- **消融实验**：条件引导的必要性（无条件生成严重失真）。
- **扩散过程对比**：恢复桥（从退图像起） vs 标准生成扩散（从噪声起），恢复桥在 PSNR/SSIM 曲线上持续上升且整体更高。
- **时间步调度策略探索**：8 种预设调度在小批量样本上测试，并分析其对性能的影响；最终根据不同任务特性进行经验选参。
- 讨论部分还涉及**反向过渡的替代方案**、条件引导机制等。
- 实验设计针对所提框架的有效性、泛化性、组件重要性进行了多维度验证，整体较为充分且对比公平。

## 6. 主要结论与发现
- **性能提升**：IRBridge 在多数任务上 FID 全面优于从头训练的桥模型，且 PSNR/SSIM 具有竞争力，证明集成预训练先验能有效增强细节恢复与整体真实感。
- **零训练恢复桥**：根本无需为特定退化训练桥模型，仅需训练 Condition 模块，大幅降低训练成本。
- **泛化性强**：在未见过的场景（如从人脸训练扩展到室内/室外修复）和真实世界退化中表现更鲁棒。
- **数据一致性**：从低质量图像起始的桥扩散比从纯噪声起始的标准生成扩散具有更强的条件约束，恢复结果与输入更一致。
- **条件必要性**：没有条件引导的纯无条件生成会导致不同时间步的估计不一致，最终输出平均化、丧失纹理。

## 7. 优点
- **方法论创新**：提出的**过渡方程**具有普适性，可桥接任意两个终点分布相同的扩散过程，为复利用预训练模型提供了理论工具。
- **训练成本极低**：彻底免去了针对每种退化的桥模型训练，将恢复问题转化为条件生成问题，极大节省算力。
- **灵活性高**：推理时的时间步、λ 等超参数可按任务调整，且支持步数压缩以满足实时性需求。
- **实验扎实**：覆盖任务多、对比基线广，并深入分析了时间步策略、过渡过程选择等关键因素，提供了切实可行的 insights。

## 8. 不足与局限
- **超参数依赖经验**：时间步调度和 λ 等的选择目前依赖任务特性和人工调参，缺少自动化优化方案。
- **控制模块较粗糙**：使用的 ControlNet 未针对图像恢复任务做专门优化，性能尚有提升空间。
- **VAE 潜在损失**：预训练 Stable Diffusion 的 VAE 可能造成高频细节丢失，导致输出轻度平滑。
- **推理效率不是主要优势**：虽可减少步数，但整体迭代扩散推理仍比前馈方法慢。
- **条件生成必须**：无法使用无条件预训练模型直接恢复图像，必须加入条件引导。
- **未利用文本条件**：目前仅用空文本引导，未发挥多模态潜力。

（完）
