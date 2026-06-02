---
title: Inverse Bridge Matching Distillation
title_zh: 逆桥匹配蒸馏
authors: "Nikita Gushchin, David Li, Daniil Selikhanovych, Evgeny Burnaev, Dmitry Baranchuk, Alexander Korotin"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=UCJSF6Vt0C"
tags: ["query:diff-bridge"]
score: 9.0
evidence: 蒸馏扩散桥模型用于图像到图像翻译
tldr: 扩散桥模型推理速度慢制约其应用。本文提出逆桥匹配蒸馏，推导易于优化的目标函数，可将桥模型蒸馏为单步生成器。方法适用于条件与无条件桥匹配，仅需噪声图像进行训练，大幅提升推理效率同时保持图像翻译质量，为扩散桥模型的实用化提供高效路径。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 972, \"height\": 1553, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1750, \"height\": 330, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1688, \"height\": 525, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1103, \"height\": 2294, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1103, \"height\": 2294, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1105, \"height\": 2314, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1105, \"height\": 2312, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1685, \"height\": 2364, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1685, \"height\": 2357, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1395, \"height\": 2330, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1395, \"height\": 2336, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1400, \"height\": 2333, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ucjsf6vt0c/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1400, \"height\": 2325, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 901, \"height\": 482, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 851, \"height\": 479, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 912, \"height\": 482, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 861, \"height\": 480, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1624, \"height\": 589, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 910, \"height\": 846, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1772, \"height\": 504, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1341, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ucjsf6vt0c/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1567, \"height\": 501, \"label\": \"Table\"}]"
motivation: 扩散桥模型推理缓慢，限制其在图像翻译中的实际部署。
method: 基于逆桥匹配形式推导蒸馏目标，将桥模型压缩为单步生成器。
result: 在条件与无条件桥匹配任务中实现快速单步生成，性能与多步模型相当。
conclusion: 逆桥匹配蒸馏有效解决扩散桥模型速度瓶颈，促进实用化。
---

## Abstract
Learning diffusion bridge models is easy; making them fast and practical is an art. Diffusion bridge models (DBMs) are a promising extension of diffusion models for applications in image-to-image translation. However, like many modern diffusion and flow models, DBMs suffer from the problem of slow inference. To address it, we propose a novel distillation technique based on the inverse bridge matching formulation and derive the tractable objective to solve it in practice. Unlike previously developed DBM distillation techniques, the proposed method can distill both conditional and unconditional types of DBMs, distill models in a one-step generator, and use only the corrupted images for training. We evaluate our approach for both conditional and unconditional types of bridge matching on a wide set of setups, including super-resolution, JPEG restoration, sketch-to-image, and other tasks, and show that our distillation technique allows us to accelerate the inference of DBMs from 4x to 100x and even provide better generation quality than used teacher model depending on particular setup. We provide the code at https://github.com/ngushchin/IBMD

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义

扩散桥模型 (Diffusion Bridge Models, DBMs) 在图像到图像翻译任务中表现出色，但推理速度极慢（通常需数百到上千步神经网络函数评估，NFE ），严重制约其实际部署。  
已有加速方法面临三个主要限制：
- 仅适用于**条件桥匹配** (Conditional Bridge Matching) 模型，无法加速**无条件桥匹配**模型；
- 大多**无法蒸馏为单步生成器**（例如一致性蒸馏仅能产出多步模型）；
- 往往需要**目标域的真实数据**参与训练。

本文提出**逆桥匹配蒸馏 (Inverse Bridge Matching Distillation, IBMD)**，旨在构建一个**通用蒸馏框架**：既能处理条件与无条件桥匹配，又能将教师模型压缩为**一步（或少步）生成器**，且训练过程**仅需损坏图像**（源域数据），无需干净的目标数据。

## 2. 方法论

### 2.1 核心思想
将蒸馏视为一个**逆向问题**：给定教师模型的漂移场 \(v^*\)（由某未知耦合 \(p^*(x_0, x_T)\) 经桥匹配求解得到），寻找一个生成式耦合 \(p_\theta(x_0|x_T)\)，使得对该耦合进行桥匹配后得到的漂移场 \(v_\theta\) 与教师漂移场一致。这被形式化为`KL( BM(Π_θ) || M^* )`的最小化问题，其中`BM(·)`表示桥匹配操作。

### 2.2 可优化的目标函数
直接优化上述KL散度需要通过`argmin`反向传播，无法实现。作者提出关键等价变换：该约束优化问题等价于如下无约束目标（以\(x_0\)-预测参数化为例）：

\[
\min_{\theta} \Big\{ \mathbb{E}_{x_0,x_T,t,x_t} \big[\lambda(t)\|\hat{x}_0^*(x_t, t) - x_0\|^2\big] - \min_{\phi} \mathbb{E}_{x_0,x_T,t,x_t} \big[\lambda(t)\|\hat{x}_0^\phi(x_t, t) - x_0\|^2\big] \Big\}
\]

其中：
- \(x_0 = G_\theta(x_T, z),\, z\sim\mathcal{N}(0,I)\)， 生成器定义耦合；
- \(x_t\) 从已知桥 \(q(x_t|x_0, x_T)\) 采样；
- \(\hat{x}_0^*\) 为教师模型（冻结）；
- \(\hat{x}_0^\phi\) 为可训练的**辅助桥网络**，内层最小化对应重建损失的期望。

该目标可解释为：**外层**使教师模型对生成样本的重建误差最小；**减去的项**鼓励生成器输出具有足够的多样性（避免坍缩），因为内层最小化的最优值恰好是\(p_\theta(x_0|x_t)\)的方差（负号驱使方差增大）。

### 2.3 条件与多步扩展
- **条件桥匹配蒸馏**：在模型和损失中加入对 \(x_T\) 的条件，其余推导完全类似。
- **多步蒸馏**：引入中间时间步序列 \(\{t_1,\dots,t_N=T\}\)，生成器接受当前状态 \(x_t\) 和时间作为输入，推理时交替执行生成器预测 \(\tilde{x}_0\) 与桥后验采样 \(q(x_{t_{n-1}}|\tilde{x}_0, x_{t_n})\)。训练时仍沿用同一公式，只是将 \(x_t\) 替换为中间步的真实采样结果。

### 2.4 算法流程
1. 初始化生成器 \(G_\theta\) 和辅助桥网络 \(\hat{x}_0^\phi\)（可用教师权重初始化）。
2. 循环迭代：
   - 更新辅助桥网络：最小化重建误差 \(\|\hat{x}_0^\phi(x_t) - x_0\|^2\)；
   - 更新生成器：最大化教师重建误差与辅助桥重建误差的差值（即上述目标）。
3. 蒸馏完成后，仅用生成器进行一步或多步推理，无需辅助网络。

## 3. 实验设计

### 3.1 数据集与场景
- **无条件桥匹配 （I2SB 教师模型）**：
  - ImageNet 256×256：
    - 4× 超分辨率（bicubic 和 pool 退化）
    - JPEG 恢复（QF=5 和 QF=10）
    - 中心修复（128×128 掩码）
- **条件桥匹配 （DDBM 教师模型）**：
  - Edges → Handbags (64×64)
  - DIODE‑Outdoor (256×256, 法线图→自然图像)
  - ImageNet 256×256 中心修复

### 3.2 对比方法与指标
- 对比方法：DDRM, DDNM, ΠGDM, ADM, Palette, CDSB, I2SB, DBIM, CBD (Consistency Distillation), CBT (Consistency Training), Pix2Pix 等。
- 主要指标：FID、Inception Score (IS)、分类器准确率 (CA)。

## 4. 资源与算力
- **硬件**：实验使用 **8 块 A100 GPU**。
- **训练时长**：根据任务不同，从 **1 小时**（如 Edges→Handbags 2步）到 **48 小时**（如 DIODE‑Outdoor 单步）不等，多数任务约 40 小时。具体数据见表 9。

## 5. 实验数量与充分性
- 包含 **8 种不同任务与退化类型**，覆盖条件与无条件桥匹配、图像恢复与转换。
- 对每种任务均进行了单步和多步蒸馏（NFE=1,2,4），并给出相应的定量对比（共 6 张主表）。
- 附录中提供了大量非挑选样本，定性验证生成质量。
- 评价标准因数据集而异：ImageNet 任务采用验证集评估；Edges‑Handbags 和 DIODE‑Outdoor 沿袭先前工作使用**训练集**评估（由于测试集过小），且作者在论文中指出了这一潜在偏差，同时补充了测试集生成的样本以供检验。
- 整体实验设计**充分、较公平**，主要对照了领域内最新的加速/蒸馏方法，并揭示了现有评估协议的缺陷。

## 6. 主要结论与发现
- IBMD 成功将扩散桥模型蒸馏为**高效少步生成器**，在 4× 超分上甚至**超越 1000 步教师模型**的性能（FID 从 2.8 降至 2.6），获得 1000× 加速。
- 在 JPEG 恢复、草图转图像等任务上，1‑2 步蒸馏模型达到与 50‑100 步教师相当或更优的结果，实现最高 100× 加速。
- 对于需要生成大面积内容的修复任务，多步蒸馏（4 步）可持平教师模型，单步仍存在一定差距。
- 蒸馏过程**完全不需要目标域的干净数据**，仅使用损坏图像。
- 教师模型的过拟合行为（如在训练集上完全复制图像）也被蒸馏模型精确复制，表明 IBMD 忠实地传递了教师行为。

## 7. 优点
- **首创性**：第一个能同时蒸馏条件与无条件桥匹配的方法，填补了无条件模型加速的空白。
- **单步能力**：被蒸馏的生成器可一步生成，突破了 CDBM 等无法单步的理论限制。
- **数据高效**：蒸馏仅需源域（损坏）图像，不需成对目标数据，降低需求。
- **理论扎实**：从逆桥匹配角度推导，给出可操作的无约束目标，并阐释了方差项的作用。
- **实验广泛**：涵盖多种视觉任务、退化类型，与多个竞争方法横向对比，并公开代码。

## 8. 不足与局限
1. **训练开销大**：需交替更新辅助桥网络和生成器，内存占用约是训练教师模型的 **3 倍**，且训练时间较长。
2. **单步修复仍有差距**：对中心修复这类需生成大面积新内容的场景，一步模型不如多步。
3. **评价协议偏差**：Edges‑Handbags 和 DIODE 任务沿用了在训练集上计算的指标，可能掩盖模型泛化能力，尽管作者已在定性部分进行了补充。
4. **依赖教师质量**：蒸馏结果的上限受限于教师模型；若教师存在过拟合或模式坍塌（如 DIODE 测试集灰图），蒸馏模型会继承这些缺陷。
5. **未探索与流匹配的关系**：虽然指出流匹配可视为极限情况，但未提供在流模型上的蒸馏实验对比。

综上，IBMD 为扩散桥模型的实用化扫清了推理速度障碍，在保持甚至提升质量的前提下实现了极致的加速，是桥匹配模型蒸馏领域的重要进展。

（完）
