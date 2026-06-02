---
title: "UniDB: A Unified Diffusion Bridge Framework via Stochastic Optimal Control"
title_zh: UniDB：基于随机最优控制的统一扩散桥框架
authors: "Kaizhen Zhu, Mokai Pan, Yuexin Ma, Yanwei Fu, Jingyi Yu, Jingya Wang, Ye Shi"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=uqCfoVXb67"
tags: ["query:diff-bridge"]
score: 10.0
evidence: 通过随机最优控制统一扩散桥模型，实现固定端点传输
tldr: 现有扩散桥模型常产生模糊或过度平滑的图像细节，且缺乏统一理论基础。本文提出基于随机最优控制的UniDB框架，推导闭式最优控制器，统一并推广现有模型，减少模糊并保留细节。图像翻译与恢复实验证明其优越性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1717, \"height\": 1024, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1698, \"height\": 937, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 859, \"height\": 549, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1753, \"height\": 796, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1714, \"height\": 883, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1773, \"height\": 939, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1734, \"height\": 919, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1733, \"height\": 886, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1756, \"height\": 1139, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-uqcfovxb67/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1516, \"height\": 2130, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-uqcfovxb67/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 841, \"height\": 1013, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uqcfovxb67/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 858, \"height\": 538, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uqcfovxb67/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1758, \"height\": 379, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uqcfovxb67/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1747, \"height\": 699, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uqcfovxb67/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1412, \"height\": 343, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uqcfovxb67/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1378, \"height\": 380, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uqcfovxb67/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 550, \"height\": 379, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-uqcfovxb67/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 851, \"height\": 293, \"label\": \"Table\"}]"
motivation: 现有扩散桥模型图像细节模糊、过度平滑，且缺乏统一理论解释。
method: 将扩散桥问题形式化为随机最优控制，推导闭式最优控制器，统一并泛化已有模型。
result: 在图像翻译和恢复任务上生成更清晰、细节丰富的图像，性能优于先前方法。
conclusion: UniDB为扩散桥提供坚实理论基础，并显著提升生成质量。
---

## Abstract
Recent advances in diffusion bridge models leverage Doob’s $h$-transform to establish fixed endpoints between distributions, demonstrating promising results in image translation and restoration tasks. However, these approaches frequently produce blurred or excessively smoothed image details and lack a comprehensive theoretical foundation to explain these shortcomings. To address these limitations, we propose UniDB, a unified framework for diffusion bridges based on Stochastic Optimal Control (SOC). UniDB formulates the problem through an SOC-based optimization and derives a closed-form solution for the optimal controller, thereby unifying and generalizing existing diffusion bridge models. We demonstrate that existing diffusion bridges employing Doob’s $h$-transform constitute a special case of our framework, emerging when the terminal penalty coefficient in the SOC cost function tends to infinity. By incorporating a tunable terminal penalty coefficient, UniDB achieves an optimal balance between control costs and terminal penalties, substantially improving detail preservation and output quality. Notably, UniDB seamlessly integrates with existing diffusion bridge models, requiring only minimal code modifications. Extensive experiments across diverse image restoration tasks validate the superiority and adaptability of the proposed framework. Our code is available at https://github.com/UniDB-SOC/UniDB/.

---

## 论文详细总结（自动生成）

好的，这是对论文《UniDB: A Unified Diffusion Bridge Framework via Stochastic Optimal Control》的结构化深度分析总结。

### 1. 论文的核心问题与整体含义

*   **研究问题**：现有的扩散桥模型（如 DDBMs, GOUB）通过 Doob's h-变换实现两个任意分布之间的图像转换（如图像修复），但普遍存在两个缺陷：一是生成图像细节模糊或过度平滑；二是缺乏统一的理论框架来解释这些方法为何有效及其局限性。
*   **整体含义**：本文旨在通过随机最优控制（SOC）的视角，为扩散桥模型建立一个统一的理论基础。核心观点是，Doob's h-变换可被视作 SOC 框架下的一个特例（当终端惩罚系数趋于无穷大时），并且该特例并非最优解。通过引入一个可调节的终端惩罚系数，能够在“控制成本”和“精确匹配目标点”之间取得平衡，从而生成细节更丰富、更真实的图像。

### 2. 论文提出的方法论

*   **核心思想**：将扩散桥的构建重新表述为一个**线性二次型随机最优控制（LQ-SOC）问题**。目标是设计一个控制器，在最小化控制能量消耗和终端状态偏差的加权成本的同时，驱动一个随机过程从源分布转移到目标分布附近。
*   **关键组件与公式 (文字描述)**：
    1.  **问题建模**：定义了一个受控的前向随机微分方程（SDE）。其目标函数包含两项：积分项代表控制成本（希望控制信号尽可能小），终端项代表受控过程的最终状态与预设目标点 $x_T$ 的平方误差，并由一个可调节的**惩罚系数 $\gamma$** 加权。
    2.  **闭式解推导**：利用 Pontryagin 最大值原理，推导出该 SOC 问题的**闭式最优控制器 $u^*_{t,\gamma}$** 以及受控状态下 $x_t$ 的解析转移表达式。这使得扩散桥的演变过程具备了可控的数学形式。
    3.  **统一框架建立**：
        *   **特例证明**：当惩罚系数 $\gamma \rightarrow \infty$ 时，最优控制器等同于 Doob's h-变换中的 h-函数项，证明现有扩散桥模型是 UniDB 的特例。
        *   **泛化与改进**：当 $\gamma$ 取有限值时，控制器允许过程末端与目标点存在微小偏差，以此换取更平滑、更符合图像自然统计特性的传输轨迹。
    4.  **训练与采样流程**：
        *   UniDB 框架可以直接集成到现有扩散桥模型中，只需修改关键的系数项（例如，在 GOUB 的均值和控制器中加入 $\gamma$ 项）。
        *   论文提供了基于统一 SDE 形式的训练目标函数和采样算法（SDE 和 ODE 形式）。

### 3. 实验设计

*   **任务与数据集**：
    *   **图像 4× 超分辨率**：DIV2K 数据集。
    *   **图像去雨**：Rain100H 数据集。
    *   **图像修复**：CelebA-HQ 256×256 数据集，使用 thin mask。
*   **评估指标**：采用重建质量（PSNR, SSIM）和感知质量（LPIPS, FID）两大类指标进行全面评估。
*   **对比方法 (Benchmark)**：
    *   通用或基于扩散的修复方法：Bicubic, DDRM, IR-SDE, PromptIR, MAXIM, MHNet。
    *   **核心对比基线：基于 Doob's h-变换的扩散桥模型（GOUB、DDBMs）**，并同时对比其 SDE 和 ODE 形式的采样器。这是验证 UniDB 改进的直接对象。
    *   还对比了基于 UniDB 框架实现的 UniDB-VE 和 UniDB-VP 与其对应的原模型 DDBMs (VE/VP)。

### 4. 资源与算力

*   **硬件配置**：论文明确指出，所有模型均在**单个拥有 96GB 显存的 NVIDIA H20 GPU** 上进行训练。
*   **训练时长**：训练过程大约需要 **2 天**时间。

### 5. 实验数量与充分性

*   **实验数量**：论文进行了较为全面的实验验证，大致包括：
    *   在 **3 个不同任务（超分、去雨、修复）** 的图像恢复实验。
    *   与 **8 种以上** 的基线方法进行了比较。
    *   针对关键超参数**惩罚系数 $\gamma$**，在三个数据集上分别选取 4-5 个不同数量级的值（从 $5 \times 10^5$ 到无穷大）进行了详细的**消融实验**。
    *   验证了框架**统一性**，对比了基于 DDBMs (VE/VP) 和 GOUB 的 UniDB 版本。
    *   对比了 **SDE 和 ODE 两种采样方式** 下的性能。
*   **充分性与客观性**：实验设计**充分且客观**。通过在多个标准任务和指标上与当前最优基线（特别是直接相关的 GOUB）对比，并结合详尽的关键超参数消融实验，有力地支撑了其主要主张。对比条件公平，都基于公开数据集和标准实现。

### 6. 论文的主要结论与发现

1.  **理论统一**：UniDB 成功将扩散桥模型统一在随机最优控制理论之下，证明 Doob's h-变换仅是 $\gamma \to \infty$ 时的一个特例，为该领域提供了更深刻的理论认知。
2.  **性能提升根源**：Doob's h-变换为了强制精确匹配端点，导致控制轨迹扭曲，产生伪影和模糊。UniDB 通过有限 $\gamma$ 进行松弛，允许微小端点偏差以换取平滑轨迹，从而显著提升图像的细节和感知质量。
3.  **实践优越性**：在多个图像恢复任务中，UniDB（尤其是 UniDB-GOU）在 LPIPS 和 FID 等感知指标上显著优于基于 Doob's h-变换的 GOUB，在 PSNR/SSIM 上保持有竞争力，证明了其在细节保留和真实性上的优势。
4.  **工程简易性**：只需对现有扩散桥模型代码进行微小改动即可集成 UniDB 框架，易于推广。

### 7. 优点

*   **理论创新性强**：首次将 SOC 理论系统性地应用于统一和改进扩散桥模型，揭示了 Doob‘s h-变换的本质和局限性，贡献了重要的理论洞见。
*   **方法简洁高效**：提供了闭式解，实现起来代码修改量小，却能带来显著的性能提升，具有很好的实用性。
*   **问题导向清晰**：针对图像模糊这一具体痛点，通过控制理论中的“成本平衡”思想给出优雅解决方案，物理解释清晰。
*   **实验全面扎实**：在多个任务、多种指标、多种基线、多种模型变体上进行了详尽的对比和消融实验，论证充分。

### 8. 不足与局限

*   **采样效率未变**：如作者所述，该方法并未解决扩散模型固有的计算成本高、采样速度慢的问题，在处理高分辨率图像或实时应用中仍有挑战。
*   **超参数依赖**：引入了新的关键超参数 $\gamma$，其最优值依赖于具体任务和数据集，需要进行额外的调优。
*   **SDE 形式假设**：模型框架目前基于线性 SDE 形式，虽然统括了流行的 VP/VE 和 GOU 过程，但在更复杂的非线性扩散过程中的泛化能力尚未探索。
*   **实验场景局限**：实验聚焦于经典的图像恢复任务，其在更广泛的任务（如无条件生成、文本到图像生成等）上的潜力有待进一步验证。

（完）
