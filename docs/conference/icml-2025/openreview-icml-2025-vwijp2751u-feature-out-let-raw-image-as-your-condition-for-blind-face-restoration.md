---
title: "Feature out! Let Raw Image as Your Condition for Blind Face Restoration"
title_zh: 特征退场！让原始图像成为盲脸修复的条件
authors: "Xinmin Qiu, Chen Gege, Bonan Li, Congying Han, Tiande Guo, Zicheng Zhang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=vwIjp2751u"
tags: ["query:diff-bridge"]
score: 10.0
evidence: 提出伪哈希图像到图像薛定谔桥，学习两个分布间的最优传输路径
tldr: 本文针对盲脸修复问题，提出基于伪哈希的图像到图像薛定谔桥方法，通过校正数据分布并学习最优传输路径，实现从低质到高质图像的直接映射，理论分析支持其有效性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 盲脸修复中退化复杂，现有扩散方法依赖特征引导而非直接分布映射。
method: 设计伪哈希薛定谔桥框架，优化分布间最优传输路径。
result: 在修复任务上取得了理论最优性的保证和性能提升。
conclusion: 为图像修复提供了基于薛定谔桥的端到端理论框架。
---

## Abstract
Blind face restoration (BFR), which involves converting low-quality (LQ) images into high-quality (HQ) images, remains challenging due to complex and unknown degradations. 
    While previous diffusion-based methods utilize feature extractors from LQ images as guidance, using raw LQ images directly as the starting point for the reverse diffusion process offers a theoretically optimal solution. 
    In this work, we propose Pseudo-Hashing Image-to-image Schrödinger Bridge (P-I2SB), a novel framework inspired by optimal mass transport problems, which enhances the restoration potential of Schrödinger Bridge (SB) by correcting data distributions and effectively learning the optimal transport path between any two data distributions.
    Notably, we theoretically explore and identify that existing methods are limited by the optimality and reversibility of solutions in SB, leading to suboptimal performance. 
    Our approach involves preprocessing HQ images during training by hashing them into pseudo-samples according to a rule related to LQ images, ensuring structural similarity in distribution.
    This guarantees optimal and reversible solutions in SB, enabling the inference process to learn effectively and allowing P-I2SB to achieve state-of-the-art results in BFR, with more natural textures and retained inference speed compared to previous methods.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：盲脸修复（Blind Face Restoration, BFR）旨在将复杂未知退化条件下的低质量人脸图像恢复为高质量图像。现有扩散模型方法普遍依赖从低质图像中提取特征作为条件引导，但这种方式间接地影响了生成过程，且特征提取本身存在信息损失，限制了修复性能。
- **研究动机**：扩散模型中理想的图像修复可建模为低质分布到高质分布之间的最优传输问题。理论上，直接以原始低质图像作为逆向扩散过程的起点（端点）是更优的方案，但这要求模型能够在两个任意分布之间学习到最优且可逆的传输路径。现有的基于薛定谔桥（Schrödinger Bridge, SB）的图像到图像方法（如 I2SB）在单一退化任务中有效，但在盲任务中由于一张高质量图像可能对应多种低质退化版本，破坏了 SB 解的最优性和可逆性，导致性能次优。
- **整体含义**：论文从理论层面揭示了 SB 在盲逆问题中的局限性，并提出一种创新的预处理策略，通过校正数据分布来保证 SB 解的存在性与最优性，从而充分释放 SB 模型直接学习低质-高质最优映射的能力，实现更自然、更清晰的修复效果。

### 2. 论文提出的方法论：核心思想、关键技术细节

#### 2.1 核心思想
提出 **Pseudo-Hashing Image-to-image Schrödinger Bridge (P-I2SB)** 框架，包含两个阶段：
1. **伪哈希模块（Pseudo-Hashing Module, PHM）**：在训练阶段，利用低质图像的信息对高质图像进行“伪哈希”预处理，将原始的 HQ-LQ 图像对转化为新的数据对 `(x̂, y)`，确保变换后的样本对在分布上满足可逆性条件。
2. **薛定谔桥模块（Schrödinger Bridge Module, SBM）**：在伪哈希处理后的数据对之间构建薛定谔桥，直接学习最优传输路径，无需高斯噪声作为中介，也无需额外的特征提取或引导模块。

#### 2.2 关键技术细节
- **理论基础**：  
  - 定理 4.1 表明，若将桥过程的端点分布设为 Dirac 分布（即确定性的图像对），则可学习到一致的随机微分方程（SDE）。  
  - 推论 4.2 指出，在盲情况下，同一 HQ 对应多个 LQ 退化时，无法建立统一的 SB，因为解的唯一性要求打破了。
- **伪哈希策略**（公式 11）：  
  三种具体实现方式，将 HQ 图像 `x` 与对应 LQ 图像 `y` 结合生成伪样本 `x̂ = H(x, y)`：
  - **Cat-I2SB**：通道拼接，`x̂ = x ⊕ y`，`y` 变为 `y ⊕ y`。
  - **Res-I2SB**：残差形式，`x̂ = y - x`（即退化残差），`y` 保持原样。
  - **Noise-I2SB**：轻量加噪，`x̂ = x + σ(y)ϵ`，其中噪声水平与 LQ 相关。
  所有策略均保证变换的可逆性，在推理时可通过对应的逆操作 `J(x̂, y)` 恢复最终的高质量结果（公式 18）。
- **薛定谔桥训练**：  
  - 沿用 I2SB 的前向过程定义（公式 15），后向过程使用基于分数匹配的生成模型（SGM）框架，训练一个 U-Net 预测网络 `ϵ`（公式 16）。  
  - 损失函数为 `∥ε(X_t, t) - (X_t - X_0)/σ_t∥`（公式 17），与 I2SB 一致。
- **算法流程**：  
  - 训练时，每步采样 `t`、HQ 图像 `x` 和 LQ 图像 `y`，生成 `x̂`，然后按前向过程加噪，训练网络预测噪声。  
  - 推理时，输入 LQ 图像，先通过伪哈希的逆过程生成伪图像，再经 SB 逆向过程恢复，最后反哈希得到最终高清人脸。

### 3. 实验设计

- **数据集**：
  - **训练集**：FFHQ（7万张，1024×1024，缩放到 512×512），使用随机退化模型生成配对的 LQ 图像（模糊、下采样、噪声、JPEG 压缩等，参数范围与现有工作对齐）。
  - **测试集**：
    - 合成数据集：CelebA-Test（从 CelebA-HQ 随机选取 3000 张，512×512，用相同退化参数生成 LQ）。
    - 真实世界数据集：LFW、CelebChild、WedPhoto-Test、Wider（用于评估泛化能力）。
- **对比方法（SOTA）**：  
  PSFRGAN, GFPGAN, GPEN, VQFR, CodeFormer, RestoreFormer, DMDNet, DAEFR, DifFace, DR2, PGDiff, DiffBIR, PMRF, FlowIE, Vanilla-I2SB 等。
- **评价指标**：  
  SSIM, PSNR, FID, NIQE, LPIPS，涵盖像素相似度和感知质量。

### 4. 资源与算力

- 论文明确提到：使用 PyTorch 实现，**8 块 32GB Tesla V100 GPU** 进行训练。
- 优化器为 Adam，学习率 1×10⁻⁴，训练 40,000 次迭代，批次大小 64。
- 未提及总训练时长，但给出了迭代次数和 GPU 数量，可大致推算。

### 5. 实验数量与充分性

- **实验组数**：
  - **主实验**：在合成 CelebA-Test 和四个真实数据集上进行了定量和定性对比（表 1、表 2，图 4、5）。
  - **消融实验**：围绕条件引导模块和伪哈希策略进行了 6 组消融（表 3，图 7），系统验证了各组件的作用。
  - **玩具实验**：在 MNIST 数据集上验证不同哈希策略的基本有效性（图 3）。
  - **损失分析**：展示了推理过程中不同方法的损失曲线（图 6）。
  - **失败案例**：分析了带水印图像的失败情况（图 14）以及更多定性对比图。
- **充分性评价**：实验设计较为全面。对比了主流 GAN 类、字典类、扩散类、流类方法多达 15 种；在合成和多种真实场景下评估；消融实验逐层剥离条件引导、伪哈希策略的影响；理论分析的推论有实验支撑。评估指标涵盖感知和非参考指标，公平性有保障。整体上，实验设计充分且严谨。

### 6. 论文的主要结论与发现

- 从理论上证明了传统 SB 在盲逆问题中的不可行性，根本原因在于一对多退化破坏了桥路径的可逆性。
- 提出的 PHM 预处理通过重塑数据对的分布结构，使 SB 能够学习到最优、可逆的传输路径，突破了原有方法的限制。
- P-I2SB 在合成和真实盲脸修复任务中均取得了 SOTA 水平的结果，生成的图像纹理更自然、细节更清晰，且在复杂退化数据集（如 Wider）上优势明显。
- 伪哈希策略无需复杂的特征提取、引导网络，仅通过直接操作数据端点，即可高效利用 SB 的传输能力，保持推理速度的同时提升性能。

### 7. 优点

- **理论驱动**：深入剖析了 SB 在盲问题中的本质缺陷，并给出了清晰的数学解释（定理与推论），为方法设计提供了坚实理论依据。
- **简洁高效**：不再设计繁重的特征提取或引导模块，而是通过简单的数据预处理（哈希）纠正分布，方法论优雅且实现直接。
- **广泛验证**：在合成数据集和四个真实世界数据集上进行评估，对比方法全面，指标多维，定性结果丰富。
- **性能优越**：在感知指标（FID、NIQE、LPIPS）上达到领先水平，尤其在严重退化场景下鲁棒性强。
- **训练收敛稳定**：实验证明伪哈希策略使推理损失曲线平滑，避免了原 I2SB 的剧烈抖动。

### 8. 不足与局限

- **退化模拟局限**：训练使用人工合成退化，对真实世界中特殊退化类型（如水印、文本遮挡）的修复效果较差，存在残留伪影（论文也明确指出）。
- **姿态泛化不足**：训练数据以正面人脸为主，对极端姿态的人脸修复能力有限。
- **伪哈希策略选择**：论文提供了三种具体策略，但并未深入分析不同策略的适用场景或提供自适应选择机制。
- **缺乏与更近期扩散模型方法的对比**：虽已对比了较新的 PMRF、FlowIE 等，但领域发展迅速，可能仍有最新工作未涵盖。
- **计算资源需求**：使用了 8 块 V100 GPU，训练代价相对较高，未讨论在低资源环境下的可行性。

（完）
