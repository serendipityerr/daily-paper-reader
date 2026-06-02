---
title: "Linear convergence of Sinkhorn's algorithm for generalized static Schrödinger bridge"
title_zh: 广义静态薛定谔桥的Sinkhorn算法线性收敛性
authors: "Rahul Choudhary, Hanbaek Lyu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=0hrkN07DuO"
tags: ["query:diff-bridge"]
score: 9.0
evidence: 研究广义静态薛定谔桥问题与Sinkhorn算法
tldr: 本文针对经典静态薛定谔桥问题，考虑任意严格递增散度泛化，证明了Sinkhorn算法在温和条件下的线性收敛，为最优传输与生成模型中的高效求解提供了更广的理论保证。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 842, \"height\": 432, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 774, \"height\": 759, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 772, \"height\": 758, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1246, \"height\": 943, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1244, \"height\": 937, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1245, \"height\": 937, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1247, \"height\": 938, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1248, \"height\": 937, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1240, \"height\": 930, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1243, \"height\": 942, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1240, \"height\": 925, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1242, \"height\": 934, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1241, \"height\": 912, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1243, \"height\": 923, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-0hrkn07duo/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1239, \"height\": 893, \"label\": \"Figure\"}]"
motivation: 现有静态薛定谔桥收敛分析限于熵正则化，需要更一般的理论。
method: 将问题推广为一般散度最小化，分析Sinkhorn算法的对偶收敛性。
result: 在广泛散度下证明了Sinkhorn算法的线性收敛速率。
conclusion: 为广义薛定谔桥的高效计算奠定了理论基础。
---

## Abstract
The classical static Schrödinger Bridge (SSB) problem, which seeks the most likely stochastic evolution between two marginal probability measures, has been studied extensively in the optimal transport and statistical physics communities, and more recently in machine learning communities in the surge of generative models. The standard approach to solve SSB is to first identify its Kantorovich dual and use Sinkhorn's algorithm to find the optimal potential functions. While the original SSB is only a strictly convex minimization problem, this approach is known to warrant linear convergence under mild assumptions. In this work, we consider a generalized SSB allowing any strictly increasing divergence functional, far generalizing the entropy functional $x\log x$ in the standard SSB. This problem naturally arises in a wide range of seemingly unrelated problems in entropic optimal transport, random graphs/matrices, and combinatorics. We establish Kantorovich duality and linear convergence of Sinkhorn's algorithm for the generalized SSB problem under mild conditions. Our results provide a new rigorous foundation for understanding Sinkhorn-type iterative methods in the context of large-scale generalized Schrödinger bridges.

---

## 论文详细总结（自动生成）

### 论文核心问题与整体含义
- 本文研究**广义静态薛定谔桥（Generalized Static Schrödinger Bridge, GSSB）**问题：在离散设定下，寻找一个矩阵$Z$，使其在加权边缘约束下极小化 $\sum_{i,j} f(Z_{ij}) W_{ij}$，其中$f$是任意严格凸的散度泛函（不再局限于经典SSB中的$x\log x$）。
- 该问题统一了多种看似无关的应用，如**熵正则最优传输**、**随机图/随机矩阵理论**、**组合学中的典型列联表**等。
- 核心目标是**提出并分析一个广义Sinkhorn算法（GSA）**，证明其在温和条件下具有**线性收敛速率**，为该类大规模问题提供坚实的迭代求解理论基础。

### 方法论
- **广义静态薛定谔桥**  
  给定非负权矩阵$W$和边缘向量$(r,c)$，求解：
  \[
  Z_{r,c} = \arg\min_{X\in\mathbb{R}^{m\times n}} \sum_{i,j} f(X_{ij})W_{ij}, \quad \text{s.t. } XW \text{ 的行和}=r,\; X^\top W \text{的列和}=c.
  \]
- **Kantorovich对偶性**  
  令$\psi$为$f$的Fenchel共轭，对偶问题为：
  \[
  \sup_{\alpha,\beta} \big[ \langle r,\alpha\rangle+\langle c,\beta\rangle - \langle W,\psi(\alpha\oplus\beta)\rangle \big].
  \]
  证明了强对偶成立，最优原始解为 $Z=\psi'(\alpha^*\oplus\beta^*)$。
- **广义Sinkhorn算法 (GSA)**  
  交替更新势：
  \[
  \beta^{(k)}_j \leftarrow \text{唯一解} \; c_j = \sum_i (f')^{-1}(\alpha^{(k-1)}_i+\beta)W_{ij},
  \]
  \[
  \alpha^{(k)}_i \leftarrow \text{唯一解} \; r_i = \sum_j (f')^{-1}(\alpha+\beta^{(k)}_j)W_{ij}.
  \]
  当$f(x)=x\log x$时退化为经典Sinkhorn算法。
- **线性收敛分析**  
  - 引入**δ‑tameness**：最优解$Z$的元被限制在$(A+\delta,B-\delta)$内（即远离$f$定义域边界），保证$\psi''$在紧集上一致正且光滑。
  - 利用隐函数定理证明**GSA迭代的L∞范数不增**（即非扩张性），从而迭代过程始终停留在某个紧长方体内部。
  - 在紧集上利用强凸性与光滑性，得到对偶目标函数值差的线性衰减：
    \[
    \Delta_{k+1} \le \big(1 - \kappa^{-2} \sigma_-^4/\sigma_+^4\big) \Delta_k,
    \]
    其中$\kappa$是代价矩阵的条件数，$\sigma_\pm$是$\psi''$在紧区间上的上下界。
  - 分别给出了$f$定义域**有界**和**无界**情形下，边值$(r,c)$满足均匀上下界时（即$s\le r_i/W_{i\bullet}\le t$）势函数**先验有界**的充分条件，从而可获得**与维度无关的线性收敛速率**。

### 实验设计
- **散度函数**：六种严格凸$f$‑散度：KL散度、Jeffreys散度、Jensen‑Shannon散度、Neyman $\chi^2$散度、二项散度、平方Hellinger散度。
- **边缘分布**：两种类型——均匀随机归一化向量、1‑或2‑模态高斯密度。
- **代价矩阵**：两种类型——均匀随机矩阵、$L^2$距离矩阵。
- **正则化参数**：$\epsilon = 1, 10, 100$。
- **问题维度**：$m=n=100$。
- **评估指标**：对偶目标梯度$L^1$范数（等价于边缘误差的$L^1$范数），以及最终运输量热图。
- 实验**未与任何外部基准方法对比**，纯粹展示GSA在不同散度下的收敛行为与生成的传输图差异。

### 资源与算力
- 文中**未提及任何算力资源**（如GPU型号、数量、训练时长等），仅指进行数值实验，没有给出计算环境描述。

### 实验数量与充分性
- 总计覆盖**12种超参数组合**（边缘分布×代价函数×正则化参数），共72个子图展示收敛曲线与传输图。
- 实验设计兼顾了参数变体，验证了不同散度下**线性收敛趋势的一致性**，但**仅限于$100\times 100$的合成数据**，缺乏大规模真实应用场景和与其他求解器的比较，因此充分性有限，推广性有待进一步验证。

### 主要结论与发现
- 广义Sinkhorn算法在广泛$f$‑散度下**均可线性收敛**，且收敛速率依赖于散度函数和代价矩阵条件数。
- 标准KL散度**并不总是收敛最快**；不同散度得到的传输图存在**定性差异**，暗示在特定应用中选用适配的散度可能带来优势。
- 理论上给出了对偶性证明和先验有界条件，为GSA在广义薛定谔桥中的线性收敛提供了**严格理论基础**。

### 优点
- **统一框架**：将经典SSB显著推广至一般凸散度，弥合了多个领域的理论缺口。
- **理论严密**：构建了完整的Kantorovich对偶，并利用隐函数定理和非扩张性给出线性收敛的紧致证明；对势的有界性给出了清晰的可验证条件。
- **实用导向**：理论结果对高维问题的维度无关收敛提供了充分条件，有益于大规模计算。
- 实验**直观展示了散度选择对收敛速度和传输行为的影响**，具有启发意义。

### 不足与局限
- **实验规模偏小**：仅使用$100\times 100$的合成矩阵，未在更大规模或真实数据（如图像、文本）上测试算法的效率和收敛性。
- **缺少对比**：未与现有的其他广义Sinkhorn求解器或标准Sinkhorn变体进行对比，难以凸显GSA的实际优势。
- **势的有界性条件较强**：对于有界域散度，维度无关收敛要求边值满足较苛刻的不等式，在实际中可能难以满足。
- **算法实现细节不详**：文中未讨论迭代终止准则、求解子问题的具体数值方法（如二分法），以及可能存在的数值稳定性问题。
- **散度函数的适用性**：尽管理论涵盖一般严格凸$f$，但实验中仅选取了六种常见散度，更多功能性散度（如$\alpha$‑散度、Rényi散度）未涉及。

（完）
