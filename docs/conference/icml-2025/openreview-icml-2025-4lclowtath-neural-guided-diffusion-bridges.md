---
title: Neural Guided Diffusion Bridges
title_zh: 神经引导扩散桥
authors: "Gefan Yang, Frank van der Meulen, Stefan Sommer"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=4LClOWTAth"
tags: ["query:diff-bridge"]
score: 10.0
evidence: 在欧氏空间中仿真条件扩散过程（扩散桥）
tldr: 针对传统扩散桥仿真需要昂贵MCMC的问题，提出用神经网络近似桥动力学，实现高效独立采样，在罕见事件和多模态场景下比基于分数学习的方法更鲁棒。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 859, \"height\": 646, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1759, \"height\": 375, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1774, \"height\": 375, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1761, \"height\": 372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1774, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1767, \"height\": 557, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1775, \"height\": 341, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1776, \"height\": 345, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1776, \"height\": 341, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1778, \"height\": 546, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1775, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1775, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1764, \"height\": 716, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4lclowtath/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1749, \"height\": 1056, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-4lclowtath/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1779, \"height\": 248, \"label\": \"Table\"}]"
motivation: 现有扩散桥方法依赖计算密集的MCMC或反向过程建模。
method: 用变分推断训练神经网络逼近扩散桥路径测度。
result: 方法在多种扩散设定和条件场景下表现出更强的鲁棒性。
conclusion: 提供了快速且通用的扩散桥仿真工具。
---

## Abstract
We propose a novel method for simulating conditioned diffusion processes (diffusion bridges) in Euclidean spaces. By training a neural network to approximate bridge dynamics, our approach eliminates the need for computationally intensive Markov Chain Monte Carlo (MCMC) methods or reverse-process modeling. Compared to existing methods, it offers greater robustness across various diffusion specifications and conditioning scenarios. This applies in particular to rare events and multimodal distributions, which pose challenges for score-learning- and MCMC-based approaches. We propose a flexible variational family for approximating the diffusion bridge path measure which is  partially specified by a neural network. Once trained, it enables efficient independent sampling at a cost comparable to sampling the unconditioned (forward) process.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **核心问题**：如何在欧氏空间中高效、鲁棒地模拟**条件扩散过程**（即扩散桥，要求过程在给定起点和终点条件下运行），避免使用昂贵的马尔可夫链蒙特卡洛（MCMC）或反向过程建模。
- **研究背景**：扩散桥在生成建模、形状分析、贝叶斯推断等领域有重要应用，但传统方法依赖引导提案+MCMC，或基于分数匹配的近似，它们在高非线性、高维、罕见事件或多模态分布下存在计算负担重或估计不准确等缺陷。
- **整体含义**：本文提出**神经引导扩散桥**，通过神经网络直接学习一个矫正漂移项来修正引导提案，以变分推断方式逼近真实桥的路径测度，训练后可以像采样无条件前向过程一样快速生成独立样本。

### 2. 方法论
- **引导提案框架**：选择一个辅助线性过程，利用其已知的转移密度构建引导提案 \( \mathbb{P}^\circ \)，其漂移包含原漂移加上一个基于 `log` 辅助密度的引导项。
- **可学习矫正项**：在引导提案的漂移中增加一项 \( \sigma(t,X_t)\vartheta_\theta(t,X_t) \)，其中 \( \vartheta_\theta \) 为神经网络，通过 Girsanov 定理定义新的测度 \( \mathbb{P}^\bullet_\theta \)。
- **变分训练目标**：最小化 \( D_{KL}(\mathbb{P}^\bullet_\theta \|\mathbb{P}^\star) \) （真实桥测度）。推导出等价的损失函数：
  \[
  L(\theta) = \mathbb{E}_{\mathbb{P}^\bullet_\theta}\left[ \int_0^T \left( \frac12\|\vartheta_\theta(s,X_s)\|^2 - G(s,X_s) \right) ds \right],
  \]
  其中 \( G \) 由原过程和辅助过程的生成元差异决定。
- **数值实现**：使用重参数化技巧（Wiener 过程为随机源），通过欧拉–丸山等SDE数值求解器前向模拟路径，利用自动微分反向传播梯度更新网络参数。
- **采样**：训练完成后，直接从神经网络引导的动态中采样，不需任何MCMC步骤。

### 3. 实验设计
- **实验场景**：
  1. **线性过程验证**：布朗桥和Ornstein–Uhlenbeck桥，可解析计算最优 \(\vartheta\) 和损失下界，用于检验网络收敛性。
  2. **细胞分化模型**：2维强非线性SDE，测试正常事件、罕见事件和多模态终点条件下的表现。
  3. **FitzHugh–Nagumo模型**：部分观测的2维低椭圆扩散，考察正常和罕见事件。
  4. **随机地标匹配**：高维（100维）状态依赖扩散系数的形状演化任务。
- **基准对比方法**：
  - 引导提案 + MCMC（pCN算法）
  - 基于分数匹配的扩散桥模拟（Heng et al.）
  - 基于伴随过程的桥模拟（Baker et al.）
  - 无条件前向采样（作为参考，仅正常事件可用）
- **评价方式**：路径样本可视化、边缘分布密度比较、损失是否达到理论下界（线性模型），以及训练参数和耗时对比（表1）。

### 4. 资源与算力
- 论文**未明确说明**所使用的GPU型号、数量或单次训练的具体时长（仅表1给出“总训练时间”的秒数，但未注明硬件环境）。缺少相关算力细节，无法复现或评估其实际运算成本。
- 训练时采用了JAX框架和Adam优化器，训练迭代步数多为5000–25000次，批次大小较小（50–100），但具体的硬件信息缺失。

### 5. 实验数量与充分性
- **实验数量**：共进行了4大类模型（线性、细胞、FHN、地标），每类模型内部又细分多种参数设定（例如不同漂移参数、正常/罕见/多模态条件），总计约10组以上独立实验。
- **充分性**：实验覆盖了从1维到100维、线性与非线性、完全观测与部分观测、椭圆与低椭圆扩散，以及易于解析和高度复杂的任务，具有较好的多样性和挑战性。对比了当前三种主流深度学习和MCMC方法，并在可解析模型中进行了定量验证（损失曲线收敛至理论界）；通过大量独立样本（最高50000条）绘制分布避免了小样本偏差。整体上实验设计较充分、客观且公平。
- **潜在不足**：罕见事件和多模态实验中，未能给出定量误差（缺少真实后验），只能定性比较路径和边缘分布；部分基线（如引导提案+MCMC）的超参数可能未针对所有场景极致调优。

### 6. 主要结论与发现
- 神经引导扩散桥在**罕见事件**和**多模态**条件下显著优于基于分数学习/伴随过程的方法，后者在这些情形中估计失准。
- 相比引导提案+MCMC，本方法训练后**独立采样成本极低**，速度与无条件正向模拟相当，且采样质量可接近MCMC收敛后的结果。
- 在高维地标匹配任务中，神经网络有效修正了简单线性辅助过程导致的漂移不足，生成更准确的终端约束路径。
- 可解析模型中损失收敛至理论下界，验证了变分目标的正确性和网络的逼近能力。

### 7. 优点
- **高效采样**：训练后无需MCMC或SMC，直接生成独立桥样本，计算开销类似无条件过程。
- **罕见事件鲁棒**：直接从条件分布学习，不受无条件样本覆盖率限制。
- **适配性广**：适用于完全或部分观测、状态依赖扩散系数、低椭圆扩散等多种设定。
- **实现简洁**：只需在标准引导提案上加一个可学习漂移项，并用自动微分框架训练。

### 8. 不足与局限
- **模式搜索倾向**：最小化 \( D_{KL}(\mathbb{P}^\bullet_\theta\|\mathbb{P}^\star) \) 可能导致变分近似只捕获数据的主要模式，对强多模态性可能覆盖不全，不如运行多条MCMC链。
- **训练依赖辅助过程质量**：引导提案过于粗糙时（如FHN罕见事件），网络校正后的桥仍与MCMC标准有差距。
- **梯度计算开销**：需沿SDE轨迹反向传播，对非常高维或长时间序列可能计算昂贵（文中提及未来可引入伴随方法降本）。
- **实验局限性**：未讨论扩展到多时间点部分观测的条件设置；算力硬件未报告，难以评估实际训练吞吐量；高维实验中仅与引导提案比较，未与其他深度桥方法直接对比（因部分方法不适用于部分观测情形）。
- **理论假设**：要求神经网络有界且Lipschitz，实际应用中需梯度裁剪和特定激活函数，可能限制模型容量。

（完）
