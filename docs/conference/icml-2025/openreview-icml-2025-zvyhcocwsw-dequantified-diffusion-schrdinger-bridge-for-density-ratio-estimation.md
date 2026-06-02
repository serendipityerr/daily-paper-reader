---
title: Dequantified Diffusion-Schrödinger Bridge for Density Ratio Estimation
title_zh: 基于去量化扩散-薛定谔桥的密度比估计
authors: "Wei Chen, Shigui Li, Jiacheng Li, Junmei Yang, John Paisley, Delu Zeng"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=zvyHCOcwsw"
tags: ["query:diff-bridge"]
score: 9.0
evidence: 提出去量化扩散桥与薛定谔桥插值用于密度比估计
tldr: 现有密度比估计方法在分布差异大或支撑重叠不足时失效，且边界附近时间分数发散。本文提出D³RE框架，通过去量化扩散桥插值（DDBI）扩大支撑并稳定时间分数，并结合最优传输设计去量化薛定谔桥插值（DSBI），实现稳健有效的密度比估计。实验表明该方法优于现有技术。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 862, \"height\": 526, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 853, \"height\": 489, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1764, \"height\": 404, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 855, \"height\": 594, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1764, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 858, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 857, \"height\": 355, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 856, \"height\": 497, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1431, \"height\": 585, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1430, \"height\": 586, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1425, \"height\": 586, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1428, \"height\": 588, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1428, \"height\": 584, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1425, \"height\": 586, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1428, \"height\": 589, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1428, \"height\": 584, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1245, \"height\": 627, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1242, \"height\": 629, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1245, \"height\": 621, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1243, \"height\": 623, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1241, \"height\": 622, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1244, \"height\": 622, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1242, \"height\": 626, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-zvyhcocwsw/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1242, \"height\": 621, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-zvyhcocwsw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 858, \"height\": 277, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zvyhcocwsw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 774, \"height\": 983, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-zvyhcocwsw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1241, \"height\": 978, \"label\": \"Table\"}]"
motivation: 密度比估计面临密度鸿沟和支撑鸿沟问题，且现有方法在边界处不稳定。
method: 提出去量化扩散桥插值(DDBI)和去量化薛定谔桥插值(DSBI)，利用扩散桥和高斯去量化扩大支撑、稳定分数。
result: 在多个数据集上实现鲁棒、稳定的密度比估计，性能超越基线。
conclusion: D³RE框架为密度比估计提供了有效解决方案，具有广泛适用性。
---

## Abstract
Density ratio estimation is fundamental to tasks involving f-divergences, yet existing methods often fail under significantly different distributions or inadequately overlapping supports --- the density-chasm and the support-chasm problems.
Additionally, prior approaches yield divergent time scores near boundaries, leading to instability.
We design $\textbf{D}^3\textbf{RE}$, a unified framework for robust, stable and efficient density ratio estimation.
We propose the dequantified diffusion bridge interpolant (DDBI), which expands support coverage and stabilizes time scores via diffusion bridges and Gaussian dequantization.
Building on DDBI, the proposed dequantified Schr{\"o}dinger bridge interpolant (DSBI) incorporates optimal transport to solve the Schr{\"o}dinger bridge problem, enhancing accuracy and efficiency.
Our method offers uniform approximation and bounded time scores in theory, and outperforms baselines empirically in mutual information and density estimation tasks.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义
密度比估计 $r(x)=q_1(x)/q_0(x)$ 是构建 $f$-散度、互信息估计和生成模型等任务的基础。传统方法在以下两个核心挑战面前表现不佳：
- **密度鸿沟 (density-chasm)**：当两个分布 $q_0,q_1$ 差异过大（如多模态）时，比值估计极不稳定。
- **支撑鸿沟 (support-chasm)**：当 $\text{supp}(q_0)\cap\text{supp}(q_1)$ 过小时，密度比失去定义，导致估计失效。
- **边界发散 (boundary divergence)**：TRE、DRE‑$\infty$ 等经典方法在 $t\to0$ 或 $t\to1$ 处时间分数 $E[|\partial_t\log q_t|]$ 趋于无穷，造成数值不稳定。

本文旨在构建一个**统一、鲁棒、高效的密度比估计框架 D$^3$RE**，从插值路径的角度系统性地同时解决上述三类问题。

### 2. 方法论
论文通过**插值策略的递进式改进**提出 D$^3$RE，核心模块如下：

- **确定性插值 (DI, 已有)**  
  $X_t = \alpha_tX_0+\beta_tX_1$，支撑完全由端点凸组合决定，无法解决支撑鸿沟。

- **扩散桥插值 (DBI, 本文提出)**  
  $X_t = \alpha_tX_0+\beta_tX_1 + \gamma B_t$（$B_t$ 为布朗桥）。  
  加入随机噪声使**支撑集和轨迹集合严格扩大**（定理 3.2、推论 3.3），缓解支撑鸿沟。但时间分数在边界仍发散。

- **高斯去量化 (GD)**  
  对端点样本加高斯噪声：$x_i' = x_i + \mathcal{N}(0,\epsilon I_d)$，从而得到平滑化密度 $q_i'=q_i*\mathcal{N}(0,\epsilon I_d)$。  
  结合 DBI 得到**去量化扩散桥插值 (DDBI)**：  
  $X'_t = \alpha_tX_0'+\beta_tX_1' + \sqrt{t(1-t)\gamma^2+(\alpha_t^2+\beta_t^2)\epsilon}\,Z_t$。  
  它实现了**均匀逼近密度比** $\|r'-r\|_{L^\infty}\le O(\epsilon)$ （命题 3.5）且**时间分数在全区间有界**（推论 3.8）。

- **最优传输重排 (OTR) → 去量化薛定谔桥插值 (DSBI)**  
  在 mini-batch 上用 Sinkhorn 算法求解熵正则最优传输 $\pi_{2\gamma^2}$，重新配对端点；再按 DDBI 插值，等价于求解**薛定谔桥问题**（命题 3.6）。  
  DSBI 的时间分数方差不大于 DDBI（定理 3.7），从而进一步降低估计误差、提升收敛速度。

- **D$^3$RE 估计流程**  
  训练一个时间分数网络 $s_t^\theta(x,t)$ 逼近 $\partial_t\log q_t'(x)$，最小化**时间分数匹配损失**（通过分部积分改写为可计算形式）。推理时对 $x$ 进行 ODE 积分 $\log r(x)\approx \int_0^1 s_t^{\theta^*}(x,t)dt$。

### 3. 实验设计
实验覆盖三类下游任务，对比基线以 DRE‑$\infty$ 为主：

- **2D 合成数据集密度估计**  
  在 `swissroll`, `circles`, `rings`, `moons`, `8gaussians`, `pinwheel`, `2spirals`, `checkerboard` 等 8 个数据集上训练 20 000 epochs。比较 `baseline(DI)`, `DI+OTR`, `D$^3$RE (DDBI)`, `D$^3$RE (DSBI)`。  
  以可视化密度图和熵正则传输损失作为定性/定量指标。

- **MNIST 能量模型密度估计**  
  利用预训练 EBM 估计 MNIST 对数密度（bits-per-dim, BPD）。噪声分布分别取 Gaussian、Copula、RQ-NSF。  
  对比方法包括 NCE、TRE、DRE‑$\infty$、DRE‑$\infty$+OTR、DDBI、DSBI。使用 AIS/RAISE 评估 BPD。

- **互信息 (MI) 估计**  
  两个 $d$ 维相关高斯分布 ($d=40,80,120$)，对比基线 (linear/Föllmer 时间调度) 与 DDBI、DSBI。展示 MI 随 epochs 的收敛曲线。

- **消融实验**  
  - 超参数 $\gamma^2$ 的影响（$0.001,0.01,0.1,0.5,1.0$），同时对比 2D 密度估计和互信息任务。
  - GD 模块的消融（使用/不使用高斯去量化）。
  - OTR 模块的消融（DI vs DI+OTR vs DDBI vs DSBI）。
  - 函数评估次数 NFE 对比，说明 OTR 降低计算开销。

### 4. 资源与算力
**论文未明确提及所用 GPU 型号、数量、训练时长等具体计算资源信息。**  
仅给出了训练超参数（如 epoch 数、batch size），未报告实际耗时或硬件平台。

### 5. 实验数量与充分性
实验设计较为充分，体现在：
- **多任务覆盖**：2D 合成密度估计（8 个数据集）、真实图像（MNIST）、高维互信息（3 个维度）。
- **丰富的消融**：对关键超参数 $\gamma^2$、GD、OTR 均进行了独立消融，且结果随训练进程可视化。
- **公平对比**：基线选取领域代表性方法（NCE, TRE, DRE‑$\infty$），并统一训练设置（epochs、损失函数）。
- **理论‑实证一致**：实验现象与定理（支撑扩大、分数有界、方差减小、NFE 降低）高度吻合。  
综合来看，实验规模与深度足以支撑论文结论。

### 6. 主要结论与发现
- D$^3$RE 是首个**同时解决密度鸿沟和支撑鸿沟**的密度比估计统一框架。
- **DDBI** 通过扩散桥与高斯去量化**扩大支撑、稳定边界时间分数**；**DSBI** 进一步引入最优传输路径，**降低方差、提升收敛速度与精度**。
- 在 2D 合成数据、MNIST 密度估计和互信息估计任务中，所提方法**一致优于 DRE‑$\infty$ 等基线**，尤其在复杂多模态分布上优势显著。
- 理论证明显示：密度比被均匀逼近，时间分数有界，且 OTR 不增加边际偏差但减小方差。

### 7. 优点
- **系统性方法论**：从 DI→DBI→DDBI→DSBI 的清晰演进，逐步解决密度鸿沟、支撑鸿沟、边界发散三个问题。
- **坚实的理论支撑**：提供了支撑扩展、分数有界、方差对比、均匀逼近等定理与命题，理论-实验呼应。
- **模块化设计**：GD（高斯去量化）、OTR（最优传输重排）可分别控制稳定性和效率，消融实验验证各自贡献。
- **代码开源**：提供 GitHub 仓库，有利于复现和后续研究。

### 8. 不足与局限
- **计算资源未披露**：未说明训练所需 GPU 时间，难以直接判断实际部署的硬件门槛。
- **实验规模中等**：密度估计仅限于 2D 玩具数据和二值 MNIST，缺乏更高维真实图像（如 CIFAR‑10/ImageNet）上的验证。
- **互信息任务维度有限**：仅做到 $d=120$，未测试更高维度下的 scalability。
- **超参数敏感性**：$\gamma^2$ 取值对性能影响明显，需针对不同任务调参；文中未提供自适应选取策略。
- **应用局限性**：主要验证密度比估计、互信息和密度估计，未探索其在域适应、假设检验等更广泛下游任务中的效果。
- **理论假设**：部分定理依赖 $q_0,q_1$ 的平滑性和 Lipschitz 条件，实际分布可能不满足。

（完）
