---
title: "MixBridge: Heterogeneous Image-to-Image Backdoor Attack through Mixture of Schrödinger Bridges"
title_zh: MixBridge：通过混合薛定谔桥实现异构图像到图像的后门攻击
authors: "Shixi Qin, Zhiyong Yang, Shilong Bao, Shi Wang, Qianqian Xu, Qingming Huang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=09WRNhHYkM"
tags: ["query:diff-bridge"]
score: 9.0
evidence: 提出用于图像到图像后门攻击的扩散薛定谔桥框架
tldr: 针对桥式扩散模型中的多源异构后门触发器植入问题，提出MixBridge框架，利用扩散薛定谔桥适应任意输入分布。该方法通过直接使用中毒图像对训练注入后门，无需修改随机微分方程，简化了攻击流程。实验表明该框架在多种图像到图像任务中有效，展示了扩散薛定谔桥在安全领域的应用潜力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1593, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1583, \"height\": 616, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1734, \"height\": 323, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 707, \"height\": 355, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1733, \"height\": 328, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1405, \"height\": 2105, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1728, \"height\": 2114, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1170, \"height\": 2087, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1171, \"height\": 2068, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1173, \"height\": 2163, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1171, \"height\": 2159, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1170, \"height\": 2113, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1171, \"height\": 2086, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1171, \"height\": 2151, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-09wrnhhykm/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1169, \"height\": 2109, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1775, \"height\": 984, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1775, \"height\": 985, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1402, \"height\": 414, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1724, \"height\": 957, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 778, \"height\": 239, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1549, \"height\": 1226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1550, \"height\": 1226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1550, \"height\": 1226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1550, \"height\": 1226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1549, \"height\": 1226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-09wrnhhykm/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1550, \"height\": 1226, \"label\": \"Table\"}]"
motivation: 现有后门攻击局限于单攻击场景和高斯噪声输入，无法处理复杂任意分布。
method: 提出MixBridge，一种扩散薛定谔桥框架，直接使用中毒图像对训练，无需修改SDE。
result: 在多种图像到图像任务中成功注入后门，验证了方法的灵活性和有效性。
conclusion: 扩散薛定谔桥为后门攻击提供了一种灵活框架，简化了跨任意输入分布的攻击实现。
---

## Abstract
This paper focuses on implanting multiple heterogeneous backdoor triggers in bridge-based diffusion models designed for complex and arbitrary input distributions. Existing backdoor formulations mainly address single-attack scenarios and are limited to Gaussian noise input models. To fill this gap, we propose MixBridge, a novel diffusion Schrödinger bridge (DSB) framework to cater to arbitrary input distributions (taking I2I tasks as special cases). Beyond this trait, we demonstrate that backdoor triggers can be injected into MixBridge by directly training with poisoned image pairs. This eliminates the need for the cumbersome modifications to stochastic differential equations required in previous studies, providing a flexible tool to study backdoor behavior for bridge models. However, a key question arises: can a single DSB model train multiple backdoor triggers?  Unfortunately, our theory shows that when attempting this, the model ends up following the geometric mean of benign and backdoored distributions, leading to performance conflict across backdoor tasks. To overcome this, we propose a Divide-and-Merge strategy to mix different bridges, where models are independently pre-trained for each specific objective (Divide) and then integrated into a unified model (Merge). In addition, a Weight Reallocation Scheme (WRS) is also designed to enhance the stealthiness of MixBridge. Empirical studies across diverse generation tasks speak to the efficacy of MixBridge. The code is available at: https://github.com/qsx830/MixBridge.

---

## 论文详细总结（自动生成）

好的，请看以下基于论文《MixBridge: Heterogeneous Image-to-Image Backdoor Attack through Mixture of Schrödinger Bridges》的结构化中文总结。

### 1. 核心问题与研究动机

本文聚焦于**图像到图像（I2I）扩散模型中的多源异构后门攻击**问题，旨在揭示一种更具威胁性且此前未被探索的攻击范式。其核心动机包含两个层面：

- **填补研究空白**：现有扩散模型后门攻击研究主要集中于两类场景：一是无条件生成模型，其输入为纯高斯噪声；二是文本到图像（T2I）生成模型，可利用文本输入植入触发器。然而，对于需要处理**任意、复杂输入分布**的图像到图像（I2I）任务（如超分辨率、图像修复），其后门攻击机制尚未被探索。
- **提升攻击复杂性与隐蔽性**：多数现有攻击仅考虑植入**单一后门**。但在现实场景中，攻击者可能注入多种不同类型的后门（异构后门），以最大化攻击效果和逃避检测的隐蔽性。因此，研究如何在处理任意分布的I2I模型中实现多后门攻击，对理解模型脆弱性至关重要。

### 2. 方法论

针对上述挑战，本文提出 **MixBridge** 框架，基于扩散薛定谔桥（Diffusion Schrödinger Bridge, DSB）模型实现异构后门攻击。其核心思想和技术细节如下：

- **核心思想**：
    - **利用DSB处理任意分布**：选用图像到图像薛定谔桥（I2SB）作为基础模型，因其能灵活实现任意两个图像分布之间的转换，完美适配I2I任务。
    - **简化后门注入机制**：从理论上证明（命题4.1），对于桥式模型，无需像以往方法那样繁琐地修改随机微分方程（SDE）来植入后门。攻击者只需**直接使用中毒的图像对**（即包含触发器的输入图像和目标恶意输出图像）进行训练，模型即可隐式地学到恶意生成路径。
    - **解决性能冲突**：当尝试用单一I2SB模型同时学习良性任务和多种后门任务时，理论分析（定理4.2）表明，模型会倾向于拟合所有任务分布的**几何平均**，导致各任务（尤其分布差异巨大的良性/恶意任务）生成质量均严重下降。

- **关键技术——“分治-合并”策略与权重重分配方案**：
    - **分治阶段**：为每个生成任务（包括1个良性任务和M个恶意后门任务）**独立预训练**一个专家模型。这确保了每个专家在其特定任务上表现优异，避免了任务间的相互干扰。
    - **合并阶段**：采用**混合专家（Mixture of Experts, MoE）** 框架，将所有预训练专家整合为统一的 MixBridge 模型。引入一个**可学习的路由器**，它接收输入图像，并为每个专家计算一个权重，最终输出为各专家预测的加权和，使模型能根据输入自适应选择生成路径。
    - **权重重分配方案（WRS）**：为防止路由器将权重完全集中于特定专家，从而暴露后门专家身份，提出WRS正则化项。该方案通过最小化实际权重分布与均匀分布的差异，鼓励权重更均匀地分配，**显著提升了攻击的隐蔽性**。

### 3. 实验设计

本文通过多组实验验证 MixBridge 的有效性。

- **数据集与任务**：
    - **CelebA 数据集**：执行 **超分辨率** 任务（作为良性任务）。输入为 \(32 \times 32\) 的低分辨率图像，目标为 \(128 \times 128\) 的高分辨率图像。
    - **ImageNet 数据集**：执行 **图像修复** 任务（作为良性任务）。输入为随机遮挡 \(20\%-30\%\) 区域的 \(256 \times 256\) 图像，目标为完整图像。
    - **后门攻击任务**：在两个数据集上均设置了3种异构后门：**伪造人脸**、**不适宜工作场所（NSFW）内容** 和 **动漫NSFW内容**。每种后门使用10张特定目标图像，触发器为输入图像角落的小块。

- **基准方法（Baselines）**：
    - **I2SB**：仅在干净数据上训练的基础模型，用于表示良性性能上限。
    - **单一模型（Single Model）**：直接使用干净数据和所有中毒数据混合训练一个I2SB模型，代表实现异构后门攻击的朴素方案。

- **评估指标**：
    - **实用性**：使用FID、PSNR、SSIM评估良性任务（超分/修复）输出质量。
    - **特异性**：使用MSE、CLIP分数、攻击成功率（ASR，CLIP分数 > 0.7视为成功）评估恶意输出与目标的相似性。
    - **隐蔽性**：使用权重分布的**香农熵**评估专家权重的均匀程度，熵越高代表越隐蔽。

### 4. 资源与算力

论文在附录D.1.3节明确描述了实验的算力配置：

- **GPU型号与数量**：使用 **NVIDIA 3090 24GB** GPU。
- **训练策略**：
    - **第一阶段（分治）**：每个专家模型在单张 3090 GPU上训练 **2500** 次迭代。
    - **第二阶段（合并）**：采用**模型并行化**策略，将不同的专家模型分配到**多张 3090 GPU** 上进行训练，总迭代次数为 **1000**。每个迭代训练 256 对图像的批数据。
    - **路由器训练**：第二阶段前，路由器先在单张GPU上预训练 **15000** 次迭代。

### 5. 实验数量与充分性

本文的实验设计较为全面和充分，覆盖了多个维度：

- **主实验**：在 **2个不同数据集**（CelebA, ImageNet）和 **2种良性任务**（超分、修复）下，对比了 **3种方法**（I2SB, 单一模型, MixBridge）在多种任务组合（如良性+1种后门，良性+2种后门等）下的表现，涉及表格1和2中的大量设置。
- **消融研究**：验证了**权重重分配方案**的有效性，通过对比有无WRS的 MixBridge 在权重分布和生成质量上的差异。
- **参数敏感性分析**：
    - **投毒率**：测试了从 \(10\%\) 到 \(90\%\) 不同中毒图片比例下的模型性能。
    - **触发器大小**：测试了不同尺寸触发器对攻击效果的影响。
- **防御抵抗性分析**：初步探讨了现有防御方法在I2I桥式模型上的无效性。
这些实验从多个角度客观评估了方法的有效性，对比公平，结论具说服力。

### 6. 主要结论与发现

- **I2I后门攻击新范式**：MixBridge 首次成功证明了在桥式扩散模型中进行图像到图像的后门攻击是可行的，并且可以通过直接训练中毒图像对来简化攻击流程。
- **多任务协同与性能突破**：提出的“分治-合并”策略有效解决了单一模型在处理异构任务时的性能冲突问题。MixBridge 不仅能生成高质量的良性输出（**保持实用性**），还能同时生成高质量的、对应不同触发器的恶意输出（**保证特异性**）。
- **攻击隐蔽性增强**：权重重分配方案（WRS）通过促使路由器给出更均匀的专家权重，成功隐藏了后门专家特征，增加了攻击的隐蔽性。
- **攻击鲁棒性**：MixBridge 即使在**极低投毒率**下也能保持很高的攻击成功率，展示了攻击的稳健性。

### 7. 优点

- **问题新颖性与开创性**：首次将后门攻击研究拓展到基于薛定谔桥的I2I模型，并探索了更危险的异构后门场景，填补了领域空白。
- **方法论简洁性与理论支撑**：通过命题4.1揭示了在桥式模型中后门注入的简易途径，无需复杂SDE设计，方法简洁高效。同时，定理4.2为为何不能采用朴素方案提供了坚实的理论解释。
- **精巧的两阶段训练策略**：“分治-合并”框架巧妙地结合了任务特定模型的优异性能和混合模型的灵活性，是解决多任务冲突的有效方案。
- **关注攻击隐蔽性**：提出的WRS直接针对MoE结构下权重分配不均的“侧信道”泄露风险，体现了对攻击全链路隐匿性的深入考量。

### 8. 不足与局限

- **防御研究的初步性**：论文仅简单分析了一种现有防御（Elijah）的无效性，但并未提出或系统性地评估针对 MixBridge 的防御策略。这为未来的防御研究留下了空间。
- **视觉触发器的局限性**：实验中采用固定位置的可见图像块作为触发器，在物理世界或严格审查下可能不够隐蔽。可进一步探索更自然、无形的触发器。
- **专家数量的预定义**：在MoE框架中，后门专家的数量需要预先设定，意味着攻击者需事先规划好要植入的后门种类。
- **内容安全性警告**：论文涉及NSFW合成内容，虽然作者已做马赛克处理，但仍需注意此类研究的伦理边界和潜在的负外部性。

（完）
