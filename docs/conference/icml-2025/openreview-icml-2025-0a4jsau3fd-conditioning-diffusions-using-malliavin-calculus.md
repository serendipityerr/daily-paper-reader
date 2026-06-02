---
title: Conditioning Diffusions Using Malliavin Calculus
title_zh: 使用Malliavin微分的条件扩散
authors: "Jakiw Pidstrigach, Elizabeth Louise Baker, Carles Domingo-Enrich, George Deligiannidis, Nikolas Nüsken"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=0A4JSAU3FD"
tags: ["query:diff-bridge"]
score: 8.0
evidence: 处理扩散桥等奇异奖励，引入基于Malliavin微分的框架
tldr: 针对扩散桥等奇异奖励问题，提出基于Malliavin微分的条件扩散框架，无需可微奖励，推广了Tweedie得分公式至非线性随机微分方程，为生成建模和随机控制提供了新工具。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-0a4jsau3fd/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 805, \"height\": 433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0a4jsau3fd/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 699, \"height\": 439, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0a4jsau3fd/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 808, \"height\": 444, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0a4jsau3fd/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 800, \"height\": 911, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0a4jsau3fd/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 801, \"height\": 854, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0a4jsau3fd/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 788, \"height\": 440, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0a4jsau3fd/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1598, \"height\": 843, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0a4jsau3fd/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1513, \"height\": 598, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-0a4jsau3fd/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 392, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-0a4jsau3fd/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 836, \"height\": 322, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-0a4jsau3fd/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 838, \"height\": 322, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-0a4jsau3fd/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 835, \"height\": 323, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-0a4jsau3fd/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 836, \"height\": 323, \"label\": \"Table\"}]"
motivation: 传统方法要求奖励可微，无法处理扩散桥等奇异情形。
method: 利用Malliavin微积分推广Tweedie公式，构造非线性SDE的稳健条件采样。
result: 成功将扩散桥等应用纳入统一框架，避免了梯度估计问题。
conclusion: 为条件扩散过程提供了一种可处理奇异问题的新途径。
---

## Abstract
In generative modelling and stochastic optimal control, a central computational task is to modify a reference diffusion process to maximise a given terminal-time reward. 
Most existing methods require this reward to be differentiable, using gradients to steer the diffusion towards favourable outcomes. 
However, in many practical settings, like diffusion bridges, the reward is singular, taking an infinite value if the target is hit and zero otherwise.
We introduce a novel framework, based on Malliavin calculus and centred around a generalisation of the Tweedie score formula to nonlinear stochastic differential equations, that enables the development of methods robust to such singularities.
This allows our approach to handle a broad range of applications, like diffusion bridges, or adding conditional controls to an already trained diffusion model.
We demonstrate that our approach offers stable and reliable training, outperforming existing techniques. 
As a byproduct, we also introduce a novel score matching objective. Our loss functions are formulated such that they could readily be extended to manifold-valued and infinite dimensional diffusions.

---

## 论文详细总结（自动生成）

好的，请查收根据论文内容生成的结构化中文总结。

### 1. 论文的核心问题与研究背景
*   **核心问题**：在生成模型与随机最优控制中，一个核心任务是对一个参考扩散过程（SDE）施加控制，使其在终端时刻最大化某个给定的奖励函数。现有方法普遍要求此奖励函数**可微**，以便计算梯度来引导扩散过程。但在许多重要应用中（如扩散桥），奖励函数具有**奇异性**（如狄拉克δ函数），即在命中目标时为无穷大，否则为零，直接导致基于梯度的方法失效。
*   **研究背景与动机**：该问题广泛存在于分子动力学、金融、生成模型（如图像引导生成）和贝叶斯逆问题等领域。作者旨在构建一个通用的数值方法框架，使其**免疫于奖励函数的奇异性**，能够可靠地处理扩散桥、对预训练扩散模型施加控制等复杂任务。

### 2. 方法论核心
*   **核心思想：路径空间上的分部积分**：
    *   其核心思想是将经典实数域上的分部积分法 `∫ ∂g · f = -∫ g · ∂f` 类比到轨迹空间。通过将微分操作从**不可微的奖励函数 `g` 转移到性质更好的因子 `f`（即路径概率密度）上**，作者巧妙地规避了对 `∇g` 的依赖。
    *   这一理念在数学上通过 **Malliavin微积分** 实现，将路径空间上的“梯度”表示为Malliavin导数，并使用维纳空间上的分部积分公式来处理奇异的狄拉克δ奖励函数。

*   **关键技术细节与定理**：
    *   **推广的Tweedie公式（定理2.1的精髓）**：作者提出了一个在非线性随机微分方程（SDE）中成立的“条件得分”表示定理。它将条件扩散所需的最优漂移项 `u*(x,y)`，表示为某个特定随机过程 `S_s`（得分过程）的条件期望。
    *   **得分过程 `S_s` 的构造（公式8）**：这是一个可以通过蒙特卡洛模拟直接采样的随机过程，其计算不涉及任何对奖励函数的梯度。它依赖于SDE的扩散项 `σ`、一个选择函数 `α`（可视为自由度）以及雅可比矩阵过程 `J_{t|s}`，公式为：`S_s = A_{T|s}^{-T} ∫_{s}^{T} α'_t^T J_{t|s}^T (σ_t(X_t)^T)^{-1} dB_t`。
    *   **损失函数 `L(u)`（公式9）**：通过最小化神经网络控制项 `u(X_s; Y)` 与得分过程 `S_s` 的L2距离 `E[∫ ||u_s - S_s||^2 ds]`，其最优解恰好就是所需的条件期望。此损失函数**无需奖励函数的梯度信息**。
    *   **算法流程**：
        1. 从参考SDE模拟采样路径 `X_t` 和对应的布朗运动 `B_t`。
        2. 根据终端状态 `X_T` 和观测算子 `G` 生成条件 `Y`。
        3. 利用伴随方法（Adjoint SDE）高效地反向计算路径上每点的得分过程 `S_s`。
        4. 计算损失并梯度下降更新控制项网络 `u` 的参数。训练好的网络可**摊销**地对任意条件 `y` 进行条件采样，无需重新训练。
    *   **`α` 的选择**：`α` 的选择提供了灵活性。论文探讨了多种选择，如：
        *   **最优 `α`**（Lemma 3.1）：在简化设定下可最小化蒙特卡洛估计的方差。
        *   **平均 `α`（`α_s = s`）**：对应于经典的Bismut-Elworthy-Li (BEL)公式。
        *   **首选/末选 `α`**：分别对应于仅使用局部或终端信息的近似。
        *   **重参数化 `α`**：可恢复现有的随机最优控制方法。

### 3. 实验设计
*   **实验场景与数据集**：
    1.  **受控环境**：
        *   **布朗运动**：维度可达10，条件为固定端点。可直接与真实桥梁解对比。
        *   **双势阱问题**：系统具有亚稳态，转移是稀有事件。维度可达10。通过与数值估计的真实解对比来评估。
    2.  **形状过程**：使用一个2D形状演化SDE模型（模拟蝴蝶翅膀等形态变化），将过程从一个小圆桥接到一个大圆。这是一个高维、非线性的挑战性任务。
    3.  **图像实验**：在**Fashion-MNIST**数据集上训练一个流匹配扩散模型，然后对生成的SDE施加控制，实现“依据图像左上角区块进行条件生成”。
*   **对比方法（Benchmarks）**：
    *   不同的`α`选择策略（如`BEL平均`、`BEL首选`、`BEL末选`、`BEL最优`、`重参数化`）之间的内部对比。
    *   与现有方法的对比：
        *   **Heng et al. (2022)** 的基于时间反转和得分匹配的方法。
        *   **Baker et al. (2025)** 的基于费曼-卡茨构造的“伴随路径”方法。
*   **评估指标**：
    *   **Dist**：生成轨迹终点与目标条件的平均欧氏距离。
    *   **MV**：生成轨迹坐标的均值-方差与真实轨迹的对比，度量分布相似性。
    *   形状过程的“平均点距离”。

### 4. 资源与算力
论文中**未明确说明**具体使用的GPU型号、数量及模型的详细训练时长。仅在附录C中提到了一些训练超参数，如受控环境实验的训练批次大小为`2048`，遍历`20,000`个批次，时间域离散化为`200`个点。

### 5. 实验数量与充分性
*   **实验组数**：论文围绕3大主要场景（可控环境、形状过程、图像）展开，其中可控环境包含不同的动力系统（布朗运动、双势阱）、不同的维度（1维，10维）和多种`α`策略选择，构成了较为丰富的消融研究。
*   **充分性与客观性**：实验设计**较为充分**。验证场景从简单解析解（布朗桥）到高度非线性的稀有事件采样（双势阱），再到高维实际应用（形状过程、图像），层次清晰。对比了多种内部`α`变体和相关领域的最新基准方法，确保了对比的**公平性**。然而，图像实验（Fashion-MNIST）部分仅作为一个概念验证，缺乏与如Denker et al. (2024) 等专为扩散模型控制设计的先进方法的定量对比，这是其**覆盖不足**之处。

### 6. 主要结论与发现
*   **框架有效性**：所提出的BEL算法能够成功处理具有**奇异奖励**的扩散过程条件化问题，无需依赖梯度信息。
*   **性能优异**：在扩散桥和形状过程桥接任务中，该方法（特别是`BEL平均`）在 **Dist** 和 **MV** 指标上**超越了**或匹配了现有最优方法（如Heng et al.和Baker et al.的方法）。
*   **概念验证**：成功展示了将其应用于预训练图像生成扩散模型，实现无需微调基座模型、**摊销式**的条件控制。
*   **方法论副产品**：推广的Tweedie公式也为非线性SDE的得分匹配提供了一种新的损失函数形式。

### 7. 论文优点
*   **理论创新性强**：利用Malliavin微积分和分部积分技巧，优雅地解决了传统方法难以处理的奇异性问题，为随机最优控制和生成建模提供了全新的理论视角和工具。
*   **稳健性**：方法对奖励函数的形式（连续、离散、带噪、无噪）无特殊要求，具有高度的通用性和稳健性。
*   **计算优势**：避免了奖励函数的梯度估算（这常是数值不稳定之源），并且训练好的模型支持**摊销式推断**，一次训练即可对任意条件采样。
*   **统一性**：该框架具有高度灵活性，通过选择不同`α`，可以统一并揭示现有多种方法（如重参数化方法、局部高斯近似方法）的内在联系。

### 8. 不足与局限
*   **`α`选择的工程依赖性**：除在简化布朗运动设定下给出了理论上的最优`α`，在更复杂场景下`α`的选择仍需通过实验调优，缺乏自动化和理论指导。
*   **损失函数方差**：`E[||u - S||^2]`损失的蒙特卡洛估计可能**方差较大**，尤其是在`α`选择不当或末态接近奇异时，可能影响训练效率和最终精度。论文虽探讨了降低方差的最优`α`，但该解仅对简化情形有效。
*   **图像实验对比不足**：在Fashion-MNIST上的实验仅为初步验证，未与如Deft (Denker et al., 2024)等直接针对扩散模型的先进条件控制方法进行全面、定量的性能比较，说服力有限。
*   **计算开销**：每次采样需要伴随过程来计算得分过程`S_s`，虽然比计算全雅可比矩阵高效，但仍会引入额外的计算开销。

（完）
