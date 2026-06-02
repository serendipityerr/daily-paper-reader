---
title: Categorical Schrödinger Bridge Matching
title_zh: 类别化薛定谔桥匹配
authors: "Grigoriy Ksenofontov, Alexander Korotin"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=RBly0nOr2h"
tags: ["query:diff-bridge"]
score: 10.0
evidence: 为离散空间薛定谔桥提供理论与算法基础
tldr: 本文针对薛定谔桥（SB）在连续空间研究充分但在离散空间缺乏理论的问题，将迭代马尔可夫拟合（IMF）推广至离散时间与离散空间，证明了收敛性，为实现混合数据的SB模型提供了基础，拓宽了生成建模的应用范围。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 774, \"height\": 1033, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 793, \"height\": 1414, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 806, \"height\": 1162, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1772, \"height\": 1137, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1711, \"height\": 445, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1752, \"height\": 420, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 979, \"height\": 905, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1644, \"height\": 1077, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1772, \"height\": 1135, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1766, \"height\": 2037, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1766, \"height\": 2043, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1766, \"height\": 2039, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rbly0nor2h/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1766, \"height\": 2044, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-rbly0nor2h/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1782, \"height\": 438, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rbly0nor2h/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 867, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rbly0nor2h/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1674, \"height\": 265, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rbly0nor2h/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1779, \"height\": 934, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rbly0nor2h/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1658, \"height\": 464, \"label\": \"Table\"}]"
motivation: 现有薛定谔桥研究集中于连续空间，缺少离散数据下的理论与算法支撑。
method: 提出离散时间迭代马尔可夫拟合方法并理论证明其收敛性。
result: 在离散空间上严格建立了薛定谔桥的理论保证与实用算法。
conclusion: 为离散数据生成建模提供了坚实的薛定谔桥理论基础。
---

## Abstract
The Schrödinger Bridge (SB) is a powerful framework for solving generative modeling tasks such as unpaired domain translation. Most SB-related research focuses on continuous data space $\mathbb{R}^{D}$ and leaves open theoretical and algorithmic questions about applying SB methods to discrete data, e.g, on finite spaces $\mathbb{S}^{D}$. Notable examples of such sets $\mathbb{S}$ are codebooks of vector-quantized (VQ) representations of modern autoencoders, tokens in texts, categories of atoms in molecules, etc. In this paper, we provide a theoretical and algorithmic foundation for solving SB in discrete spaces using the recently introduced Iterative Markovian Fitting (IMF) procedure. Specifically, we theoretically justify the convergence of discrete-time IMF (D-IMF) to SB in discrete spaces. This enables us to develop a practical computational algorithm for SB, which we call Categorical Schrödinger Bridge Matching (CSBM). We show the performance of CSBM via a series of experiments with synthetic data and VQ representations of images. The code of CSBM is available at [this repository](https://github.com/gregkseno/csbm).

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

- **研究动机**：薛定谔桥（Schrödinger Bridge, SB）是解决无监督域翻译等生成建模任务的有力框架。然而，现有 SB 方法几乎全部集中于连续数据空间（如 $\mathbb{R}^D$），缺乏对离散数据（如文本词元、VQ 量化特征、分子类别等）的理论支撑与算法设计。
- **核心问题**：如何将基于迭代马尔可夫拟合（IMF）的 SB 求解范式严格推广到离散状态空间（$\mathbb{S}^D$），给出理论保证并构建实用的计算算法。
- **整体意义**：此项工作填补了离散空间 SB 的理论空白，使 SB 在更广泛的数据类型上具备可用性，为未来离散生成模型研究提供了新基础。

### 2. 论文提出的方法论

#### 2.1 理论基础
- 将离散时间 IMF（D‑IMF）过程从连续空间扩展至离散空间 $\mathcal{X} = \mathbb{S}^D$。
- **定理 3.1**：对于有限离散空间和全支撑的马尔可夫参考过程 $q_{\text{ref}}$，存在唯一的动态 SB 解，该解同时具有“马尔可夫性”和“互易性”（reciprocal property）。这一特性使得 D‑IMF 通过交替执行互易投影和马尔可夫投影，可在 KL 散度意义下收敛到 SB 解（推论 3.2）。

#### 2.2 算法实现：CSBM
- **参考过程 $q_{\text{ref}}$ 的构造**：提供两种参考过程。
  - **均匀参考 $q^{\text{unif}}$**：每个状态以高概率保持当前类别，剩余概率均匀分布到其他类别（适用于无序类别）。
  - **高斯参考 $q^{\text{gauss}}$**：跃迁概率按照类别间的有序距离呈高斯衰减（适用于有序类别）。
- **可学习过程的参数化**（预测终点 + 维度因子分解）：
  - 模型不直接参数化 $S^D \times S^D$ 的转移矩阵，而是预测给定当前状态 $x_{t_{n-1}}$ 时的终点 $\tilde{x}_1$，再通过参考桥 $q_{\text{ref}}(x_{t_n}|x_{t_{n-1}},\tilde{x}_1)$ 采样下一时刻状态。
  - 使用神经网络输出一个 $D \times S$ 的行随机矩阵，即假定 $q_\theta(\tilde{x}_1|x_{t_{n-1}})$ 在各维度上条件独立。
- **训练目标**（基于命题 3.3）：
  - 马尔可夫投影可以通过最小化类似扩散模型损失的 KL 目标实现，即
    $$L(\theta) = \mathbb{E}_{q(x_0,x_1)} \left[\sum_{n=1}^{N} \mathbb{E}_{q_{\text{ref}}(x_{t_{n-1}}|x_0,x_1)} \text{KL}\left(q_{\text{ref}}(x_{t_n}|x_{t_{n-1}},x_1) \| \mathbb{E}_{\tilde{q}_\theta(\tilde{x}_1|x_{t_{n-1}})}[q_{\text{ref}}(x_{t_n}|x_{t_{n-1}},\tilde{x}_1)]\right) - \lambda \log \tilde{q}_\theta(x_1|x_{t_N}) \right]$$
  - 双向版本同时学习前向过程 $q_\theta(x_{t_n}|x_{t_{n-1}})$ 和后向过程 $q_\eta(x_{t_{n-1}}|x_{t_n})$，交替更新（Algorithm 1）。
- **其他损失选择**：指出 KL 的最小值等价于某些 Bregman 散度，实验中也测试了 MSE 损失，取得相似效果。

### 3. 实验设计

| 实验场景 | 数据集/设置 | 对比方法与基准 | 主要观察变量 |
|----------|--------------|----------------|--------------|
| **离散空间收敛性验证** | 合成数据，$S=50$，$D=1$，$p_0$ 均匀分布，$p_1$ 线性分布 | 理论静态 SB 解（Sinkhorn 算法） | 参考过程类型、随机性参数 $\alpha$、时间步数 $N$ |
| **2D 平面翻译** | 离散化 2D 高斯 $\to$ Swiss Roll（$S=50$，$D=2$） | 仅展示 CSBM 自身 | $\alpha$ 大小、参考过程 $q^{\text{gauss}}$ vs $q^{\text{unif}}$ |
| **图像无配对翻译** | Colored MNIST（数字“2”↔“3”）像素离散化（$S=256$） | 无外部对比，自身消融 | 时间步数 $N \in \{2,4,10,25,50,100\}$，参考过程类型 |
| **高维潜空间翻译** | CelebA 128×128，VQ‑GAN 码本 $S=1024$，$D=256$，male↔female | **DSBM**、**ASBM**（均在连续像素空间） | $\alpha \in \{0.005,0.01\}$，FID、CMMD、LPIPS 指标 |
| **文本风格迁移** | Amazon Reviews 情感迁移（负面↔正面），词表 $S=8192$，$D=100$ | CAAE, Del.&Ret., Seq2SentiSeq, BST, FGIM, PST, SCT1 | BLEU、NLL（GPT‑2）、情感分类准确率 |

- 所有对比均使用公开的标准指标，CelebA 实验中与显式的连续空间 SB 方法直接对比。

### 4. 资源与算力

- **计算资源**：NVIDIA A100 GPU。
- **训练耗时**：
  - 2D 合成实验：1 张 A100 数小时。
  - Colored MNIST：2 张 A100 约两天。
  - CelebA（含 VQ‑GAN 训练）和 Amazon Reviews：4 张 A100 约五天。
- 训练超参数（学习率、batch size、迭代次数等）在附录表 5 中详细列出，可复现。

### 5. 实验数量与充分性

- **实验组数**：涵盖 5 个场景，每个场景包含多组消融（如不同 $\alpha$、$N$、参考过程类型），总计 20+ 组量化对比。文本域另有 7 种基线对比。
- **消融研究**：
  - 对收敛曲线、$N$ 的影响、$\alpha$ 的影响进行了定量分析。
  - 不同损失函数（KL vs MSE）在 2D 实验中对比，体现损失选择的灵活性。
  - 参考过程适用性通过 Colored MNIST 中 $q^{\text{unif}}$ 失败案例进行负面展示。
- **公平性**：
  - CelebA 实验使用同一潜空间，DSBM/ASBM 均按其官方配置运行；由于连续空间方法在潜空间表现不佳，未强行对比，但保留了像素空间结果，具备合理性。
  - 文本实验复用现有评测框架，可信度较高。
- **充分性**：实验覆盖合成数据、图像（低维与高维潜空间）和文本，多类指标评估，实验设计整体充分，能较好支持理论论断。

### 6. 论文的主要结论与发现

1. **理论收敛**：在离散空间 $\mathcal{X} = \mathbb{S}^D$ 下，马尔可夫参考过程对应的动态 SB 解是唯一同时满足马尔可夫和互易性质的过程，D‑IMF 过程可收敛至该解。
2. **算法有效性**：提出的 CSBM 算法能够在文本、图像等多种离散数据上成功执行无配对翻译，生成的样本在内容保留和目标域对齐之间取得良好平衡。
3. **参考过程影响可控**：通过调整 $\alpha$ 和 $N$，可以灵活控制轨迹的随机性和生成质量；不同参考过程（均匀 vs 有序）的合理选择对任务效果至关重要。
4. **潜空间潜力**：利用 VQ 量化表示的离散 SB 在 CelebA 上甚至取得了优于部分连续空间方法的 FID 和 LPIPS 指标，背景保持能力更强。

### 7. 优点

- **理论创新**：给出离散空间下 SB 的第一个严格收敛证明，奠定了 D‑IMF 在该类数据上的使用合法性。
- **实用算法**：提供端到端的 CSBM 算法，参数化与训练流程借鉴扩散模型的成熟技术，易于实现和推广。
- **多模态验证**：从合成数据到真实图像（像素级与潜变量级）再到文本风格迁移，覆盖全面。
- **可复现性**：代码已开源，训练超参数详细，多处使用标准评估协议。
- **表述清晰**：论文结构合理，从静态 SB、动态 SB 到 IMF 的动机铺垫清楚，定理与推论的叙述简明。

### 8. 不足与局限

- **维度分解假设**：模型默认各维度独立预测终点，可能丢失维度间的依赖信息（在 Colored MNIST 中表现为像素化伪影），尽管许多离散生成模型存在同样限制。
- **参考过程构建依赖**：$N$ 增大时，为保持整体随机性不变需要精细调整 $\alpha$，否则 $q_{\text{ref}}$ 会退化为均匀分布，削弱参考设计的意义。
- **收敛速度与效果平衡**：CSBM 为了达到较好效果有时需要较多的时间步（CelebA 用 $N=100$），而连续空间的 IMF 方法通常 $N$ 较小，这可能是进一步优化的方向。
- **对比基线范围**：在潜空间 CelebA 实验中，由于连续方法直接应用于潜空间效果不佳，只与像素空间的 DSBM/ASBM 对比，可能不足以展现离散 SB 在潜空间上的全部优势与劣势。
- **文本域指标**：情感迁移实验中，虽然 BLEU 和 NLL 优异，但情感准确率低于部分基线，可能需要更精细的损失平衡。

（完）
