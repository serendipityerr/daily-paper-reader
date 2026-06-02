---
title: Trajectory Inference with Smooth Schrödinger Bridges
title_zh: 基于光滑薛定谔桥的轨迹推断
authors: "Wanli Hong, Yuliang Shi, Jonathan Niles-Weed"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=GHyvvWu1XC"
tags: ["query:diff-bridge"]
score: 10.0
evidence: 引入光滑薛定谔桥用于轨迹推断
tldr: 轨迹推断中现有多边缘薛定谔桥方法未考虑参考过程的平滑性。本文提出光滑薛定谔桥，允许参考过程为光滑高斯过程，通过相空间提升实现多项式时间求解，在模拟和真实单细胞数据上胜过现有方法。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 802, \"height\": 377, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 802, \"height\": 433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 627, \"height\": 330, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 791, \"height\": 404, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 764, \"height\": 530, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 846, \"height\": 211, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 836, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1334, \"height\": 915, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1681, \"height\": 407, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1333, \"height\": 915, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1679, \"height\": 406, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 575, \"height\": 564, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1302, \"height\": 889, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1326, \"height\": 921, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1468, \"height\": 452, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ghyvvwu1xc/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1541, \"height\": 361, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 864, \"height\": 635, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 866, \"height\": 633, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 874, \"height\": 523, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 883, \"height\": 839, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1781, \"height\": 926, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 865, \"height\": 648, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1441, \"height\": 626, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1307, \"height\": 627, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1713, \"height\": 140, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1146, \"height\": 144, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1658, \"height\": 677, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ghyvvwu1xc/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 531, \"height\": 270, \"label\": \"Table\"}]"
motivation: 现有薛定谔桥方法参考过程不平滑，导致轨迹不规则且难以解释。
method: 将参考过程推广为光滑高斯过程，通过相空间提升将问题转化为可高效求解的形式。
result: 在模拟和真实单细胞轨迹推断中，轨迹更平滑、生物学更合理，性能优于现有方法。
conclusion: 光滑薛定谔桥为动态过程中的轨迹推断提供了更具解释性的方法。
---

## Abstract
Motivated by applications in trajectory inference and particle tracking, we introduce **Smooth Schrödinger Bridges**. Our proposal generalizes prior work by allowing the reference process in the multi-marginal Schrödinger Bridge problem to be a smooth Gaussian process, leading to more regular and interpretable trajectories in applications. Though naïvely smoothing the reference process leads to a computationally intractable problem, we identify a class of processes (including the Matérn processes) for which the resulting Smooth Schrödinger Bridge problem can be *lifted* to a simpler problem on phase space, which can be solved in polynomial time. We develop a practical approximation of this algorithm that outperforms existing methods on numerous simulated and real single-cell RNAseq datasets.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

- **研究背景**：轨迹推断（从离散时间点观测的粒子位置重建连续路径）在单细胞生物学、流体力学、天体跟踪等领域至关重要。
- **现有方法的局限**：经典的多边缘薛定谔桥方法以布朗运动作为先验参考过程，导致推断的轨迹与布朗路径一样粗糙，噪声大、缺乏可解释性，且粒子跟踪准确率低。
- **本研究动机**：在保持薛定谔桥清晰统计解释的同时，引入光滑先验，使轨迹更平滑、更易解释，并在粒子跟踪中“借用”相邻时间点信息，提升推断精度。

### 2. 论文提出的方法论

- **核心思想**：用光滑高斯过程（特别是 **高斯自回归过程 GAP**，如 Matérn 过程）替代布朗运动作为多边缘薛定谔桥的参考过程 `R`，形成 **光滑薛定谔桥（Smooth Schrödinger Bridges）**。
- **主要挑战与突破**：
  - 光滑高斯过程通常不是马尔可夫过程，直接使用导致计算复杂度为指数级。
  - 发现 GAP 的“**提升（lift）**”性质：原过程 `ω` 本身不马尔可夫，但其在相空间中的表示 `η=(ω, dω/dt, …, d^{m-1}ω/dt^{m-1})` 是高斯–马尔可夫过程。
  - 利用这一性质将原问题提升为相空间上的优化问题，从而可用信念传播求解。
- **关键技术细节**：
  - 问题形式：`min_{P} D(P||R)` 满足边缘分布约束 `P_k = μ_k`。
  - 提升后的目标：在相空间 `Z = X × Y` 上求解带树结构代价的熵最优输运。
  - 使用 **信念传播（Belief Propagation）** 迭代更新左右消息 `δ^+`, `δ^-` 和垂直消息 `β_k`。
  - 用正交基展开连续消息（如 Haar 小波基），截断至 `M` 项实现近似算法，计算复杂度 `O(T K n^2 M^2)`。
- **算法流程摘要**：
  1. 预计算系数张量 `Γ`（基于参考过程的转移密度与正交基）。
  2. 循环执行左右传递：更新左消息系数 `l_k`、右消息系数 `r_k`。
  3. 通过 `β_k ∝ μ_k / ⟨l_k, r_k⟩` 更新缩放函数。
  4. 迭代至收敛，得到最优解。

### 3. 实验设计

- **数据集/场景**：
  - **一对一粒子跟踪（OBO）**：1D/2D 高斯过程、三稳态扩散、N 体天体轨道（3D）。评价指标：跳跃概率、连续正确步数比例、平均 ℓ₂ 距离等。
  - **点云轨迹推断**：Petal、Embryoid Body (EB)、Converging Gaussian、Dyngen Tree (5D)、Dyngen Cycle (10D)。包含留一时刻（LOT）预测任务。
- **对比方法**：
  - 经典薛定谔桥（BMSB）、W2 最优匹配（W2M）、MIOFlow、DMSB、F&S（快速光滑插值）。
- **评价指标**：Wasserstein-1 距离（W1）、最大均值差异（高斯核 MG、恒等核 MI）等。

### 4. 资源与算力

- 文中未明确说明训练所使用的具体 GPU 型号、数量或训练总时长。
- 仅提及：Smooth SB 和 F&S 不需要 GPU，而 DMSB 和 MIOFlow 实验使用了一张 NVIDIA A100-SXM4-80GB。
- 另外提供了不同 `M` 和维度 `d` 下的一次消息传递迭代的运行时间记录（如表 9），但未提及总的迭代次数或完整实验耗时。

### 5. 实验数量与充分性

- **实验组数**：
  - OBO 任务：3 个数据集 × 3 种方法，提供定量比较与可视化。
  - 点云轨迹推断：5 个数据集 ×（含完整路径可视化 + LOT 任务），与 3 种前沿方法对比；LOT 任务中对不同缺失步长的进一步测试。
  - 还包含参数（方差倍数 `c`）对匹配质量的影响、不同 `M` 和维度下的运行时间测量。
- **充分性与公平性**：
  - 对比方法均为该领域公认基线，且作者对超参数进行了调优。
  - 覆盖低维到 10 维的真实 scRNA-seq 数据，考虑了多种几何结构（分叉、汇聚、循环）。
  - 未进行严格的统计显著性检验，但给出了多样化的定量和定性证据，整体设计相对全面和公平。

### 6. 论文的主要结论与发现

- 所提 **光滑薛定谔桥** 在粒子跟踪和轨迹推断方面均表现出色，生成的轨迹更平滑、集中，几何结构恢复更好。
- 在一对一跟踪任务中，特别是在 N 体和 2D 高斯过程数据上，准确率远优于经典 SB 和 W2 匹配（例如 5p acc 从 0.171/0.760 提升至 0.999/0.991）。
- 在点云 LOT 任务上，光滑 SB 在所有数据集上均达到最优或次优，尤其在 Petal、EB 等数据上显著降低 W1 和 MG 误差。
- 算法在适当选择近似系数 `M`（通常几百到千级别）和过程方差 `c` 的条件下，可取得好的泛化性能；维度较高时系数需相应减小。

### 7. 优点

- **方法创新**：首次系统地将光滑高斯过程（GAP）作为多边缘薛定谔桥的先验，并通过相空间提升实现多项式时间求解。
- **理论简洁**：保留了薛定谔桥的概率解释，同时解决了轨迹粗糙问题。
- **实验广泛**：涵盖了合成数据到多个真实 scRNA-seq 数据集，并与多种基线方法对比，展示了稳健的实证优势。
- **实用近似**：提出的正交基截断近似易于实现，并且可结合 Haar 小波保持消息非负性。
- **算法效率**：计算复杂度为 `O(K^2 n^2 M^2)`，其中 `n` 为每步粒子数，指数级优于暴力方法。

### 8. 不足与局限

- **维度灾难**：近似系数 `M` 随 GAP 阶数 `m` 和输入维度 `d` 呈指数增长，限制其在高维问题中的应用；文中也承认这是主要局限。
- **近似缺乏理论保证**：正交截断近似的误差尚未有严格界限，算法输出的最优性依赖于经验验证。
- **参数敏感**：过程超参数（如方差 `c`、基函数个数 `M`）需针对不同数据调整，自动化选择机制缺失。
- **未含噪声观测**：文中仅处理精确边缘分布约束，未正式扩展到含噪观测情况（虽提及为未来工作）。
- **实验对比细节**：部分对比方法（如 DMSB）在某些数据集上未能收敛或结果较差，未深入分析原因。
- **算力披露不足**：未提供完整训练时长对比，难以评估实际部署成本。

（完）
