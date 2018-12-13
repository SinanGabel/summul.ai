
// source: http://cs231n.github.io/neural-networks-case-study/

// Each row is a single example

const X1 = [[-0.00000000e+00,  0.00000000e+00],
       [-2.42776323e-03,  9.80491564e-03],
       [ 2.38269820e-03,  2.00610162e-02],
       [ 4.75714336e-03,  2.99272991e-02],
       [ 6.83975945e-03,  3.98209012e-02],
       [ 1.05117824e-02,  4.93990137e-02],
       [ 1.65110863e-02,  5.83136229e-02],
       [ 2.12881058e-02,  6.74263035e-02],
       [ 5.42219772e-02,  5.99159671e-02],
       [ 3.42438836e-02,  8.42129399e-02],
       [ 8.88900252e-04,  1.01006190e-01],
       [ 5.55936494e-02,  9.62030413e-02],
       [ 7.91126972e-02,  9.18344133e-02],
       [ 8.38895007e-02,  1.01023216e-01],
       [ 5.81418958e-02,  1.28908802e-01],
       [ 8.83707543e-02,  1.23074981e-01],
       [ 8.44724379e-02,  1.37783130e-01],
       [ 1.24119849e-01,  1.18663601e-01],
       [ 1.31014899e-01,  1.26067234e-01],
       [ 1.17011094e-01,  1.52122912e-01],
       [ 1.52163476e-01,  1.32885058e-01],
       [ 1.65256710e-01,  1.32987325e-01],
       [ 1.73189364e-01,  1.39241374e-01],
       [ 2.20946460e-01,  7.18104886e-02],
       [ 1.46623285e-01,  1.93057312e-01],
       [ 2.45844872e-01,  5.77001042e-02],
       [ 2.08078233e-01,  1.60237332e-01],
       [ 2.45872944e-01,  1.18011275e-01],
       [ 2.08320849e-01,  1.91296266e-01],
       [ 2.74287262e-01,  1.02830289e-01],
       [ 2.85883306e-01,  1.00489303e-01],
       [ 3.13123370e-01, -2.23039550e-03],
       [ 3.22060312e-01,  2.75007274e-02],
       [ 2.93151087e-01,  1.58661751e-01],
       [ 3.31818107e-01,  8.85657497e-02],
       [ 3.52685603e-01,  2.44971819e-02],
       [ 3.62544013e-01,  2.81645794e-02],
       [ 3.62917688e-01,  8.92769625e-02],
       [ 3.73665390e-01,  8.77842871e-02],
       [ 3.89800430e-01, -5.69549886e-02],
       [ 4.00562264e-01,  5.29010478e-02],
       [ 4.10785688e-01, -5.26139649e-02],
       [ 4.12855779e-01, -9.76306299e-02],
       [ 4.34304508e-01, -5.81490078e-03],
       [ 4.43667043e-01, -2.62758209e-02],
       [ 4.42871748e-01, -1.02353237e-01],
       [ 4.55066063e-01, -9.38680759e-02],
       [ 4.67886908e-01, -8.04176959e-02],
       [ 4.23010713e-01, -2.36938789e-01],
       [ 4.85099644e-01, -9.82514019e-02],
       [ 4.27575285e-01, -2.68803624e-01],
       [ 4.81687636e-01, -1.82642013e-01],
       [ 4.68863389e-01, -2.36764309e-01],
       [ 4.51133667e-01, -2.88239175e-01],
       [ 4.16711848e-01, -3.51954397e-01],
       [ 5.12180003e-01, -2.15205993e-01],
       [ 3.70316993e-01, -4.27589377e-01],
       [ 3.68468352e-01, -4.42411415e-01],
       [ 4.47426466e-01, -3.78206082e-01],
       [ 2.91865209e-01, -5.19598441e-01],
       [ 4.82921153e-01, -3.66192051e-01],
       [ 4.73729534e-01, -3.93999322e-01],
       [ 3.76998220e-01, -5.00077213e-01],
       [ 3.47829710e-01, -5.32891331e-01],
       [ 4.73199237e-01, -4.40453200e-01],
       [ 1.06238018e-01, -6.47913532e-01],
       [ 2.51047994e-01, -6.17591571e-01],
       [ 1.89036339e-01, -6.49830556e-01],
       [ 3.62561674e-01, -5.83384629e-01],
       [ 1.55259897e-01, -6.79456491e-01],
       [ 3.42441263e-01, -6.18613745e-01],
       [ 2.16611791e-01, -6.83677266e-01],
       [ 1.94681719e-01, -7.00731509e-01],
       [ 9.50007030e-02, -7.31228347e-01],
       [ 1.77694253e-01, -7.26046314e-01],
       [-1.02511635e-02, -7.57506397e-01],
       [ 6.88015241e-02, -7.64587451e-01],
       [ 5.27305717e-03, -7.77759903e-01],
       [ 9.86583078e-03, -7.87817015e-01],
       [ 1.36049221e-01, -7.86296615e-01],
       [-1.33120374e-01, -7.97040500e-01],
       [ 2.29663120e-02, -8.17859423e-01],
       [-1.82113416e-01, -8.08014324e-01],
       [ 1.23767272e-01, -8.29197879e-01],
       [-3.45993230e-01, -7.74735583e-01],
       [ 1.69470085e-01, -8.41694462e-01],
       [-1.97051698e-01, -8.46042259e-01],
       [-5.61567705e-02, -8.76991763e-01],
       [-1.53169286e-01, -8.75592729e-01],
       [-4.53582017e-01, -7.76174074e-01],
       [-6.32762147e-01, -6.52731450e-01],
       [-5.23150213e-01, -7.55796030e-01],
       [-7.13130198e-01, -5.95844501e-01],
       [-3.32149020e-01, -8.78713834e-01],
       [-5.51395265e-01, -7.72983778e-01],
       [-2.72473462e-01, -9.20099244e-01],
       [-5.29346200e-01, -8.12468346e-01],
       [-7.12994015e-01, -6.72044356e-01],
       [-7.08657021e-01, -6.91162237e-01],
       [-7.24200354e-01, -6.89589622e-01],
       [-0.00000000e+00, -0.00000000e+00],
       [-6.75314032e-03, -7.51169095e-03],
       [-1.64789212e-02, -1.16861789e-02],
       [-2.71940523e-02, -1.33700099e-02],
       [-3.54312465e-02, -1.94194041e-02],
       [-4.76881400e-02, -1.66313388e-02],
       [-5.49307349e-02, -2.56068145e-02],
       [-6.02757472e-02, -3.69638222e-02],
       [-7.75107522e-02, -2.28479588e-02],
       [-9.09083965e-02, -3.55319386e-04],
       [-9.19438602e-02, -4.18254357e-02],
       [-7.47051042e-02, -8.22485649e-02],
       [-1.15357777e-01, -3.72150716e-02],
       [-1.29757497e-01, -2.01526779e-02],
       [-1.26541624e-01, -6.31282563e-02],
       [-1.49851563e-01,  2.23908498e-02],
       [-1.61292457e-01, -1.02238375e-02],
       [-1.71691474e-01,  2.97064587e-03],
       [-1.81776446e-01, -3.89551245e-03],
       [-1.86460758e-01, -4.54462524e-02],
       [-2.01831700e-01, -8.72506524e-03],
       [-2.12054355e-01,  5.32531450e-03],
       [-2.10707443e-01,  7.06051671e-02],
       [-2.23169215e-01, -6.45723280e-02],
       [-2.23487681e-01,  9.39296011e-02],
       [-2.19455279e-01,  1.24933518e-01],
       [-2.57325509e-01,  5.24989143e-02],
       [-2.51643556e-01,  1.05146023e-01],
       [-2.30888501e-01,  1.63347291e-01],
       [-2.89956769e-01,  4.16250273e-02],
       [-2.46502973e-01,  1.76248826e-01],
       [-3.02557238e-01,  8.06866605e-02],
       [-2.39965358e-01,  2.16554293e-01],
       [-2.72920851e-01,  1.91377429e-01],
       [-2.92850602e-01,  1.79403660e-01],
       [-2.60915800e-01,  2.38558570e-01],
       [-3.01567925e-01,  2.03194959e-01],
       [-2.83488649e-01,  2.43544268e-01],
       [-2.34850080e-01,  3.03607221e-01],
       [-1.88245409e-01,  3.46051892e-01],
       [-2.35489653e-01,  3.28318857e-01],
       [-1.80136597e-01,  3.72912748e-01],
       [-2.97169861e-01,  3.02773362e-01],
       [-1.08038249e-01,  4.20692234e-01],
       [-1.44309694e-01,  4.20363624e-01],
       [-1.14981219e-01,  4.39762310e-01],
       [-9.22811493e-02,  4.55390521e-01],
       [-1.82280456e-01,  4.38359442e-01],
       [-1.69771571e-01,  4.54153792e-01],
       [-1.07709777e-01,  4.83087576e-01],
       [-1.60392741e-01,  4.78905190e-01],
       [-1.70487535e-01,  4.86122499e-01],
       [-2.79012719e-01,  4.45019233e-01],
       [-8.08981029e-02,  5.29205919e-01],
       [-7.70210704e-02,  5.39989274e-01],
       [-1.03588160e-01,  5.45812668e-01],
       [ 5.28245356e-03,  5.65631900e-01],
       [-8.04643686e-02,  5.70107246e-01],
       [-6.35601599e-02,  5.82400540e-01],
       [ 3.43259240e-02,  5.94970227e-01],
       [ 1.86848154e-01,  5.76539006e-01],
       [ 1.87659080e-01,  5.86889433e-01],
       [ 1.53140608e-02,  6.26075360e-01],
       [ 5.34123391e-02,  6.34118128e-01],
       [ 1.98383323e-01,  6.15272782e-01],
       [ 3.43636616e-01,  5.59457181e-01],
       [ 1.70520188e-01,  6.44489961e-01],
       [ 3.27110336e-01,  5.92463768e-01],
       [ 1.24137251e-01,  6.75557944e-01],
       [ 3.38264716e-01,  6.09379800e-01],
       [ 5.42170339e-01,  4.53872569e-01],
       [ 3.55327197e-01,  6.22958951e-01],
       [ 4.59135281e-01,  5.64021643e-01],
       [ 5.92166638e-01,  4.39384457e-01],
       [ 2.48550255e-01,  7.04940614e-01],
       [ 5.40640438e-01,  5.30687239e-01],
       [ 4.89474055e-01,  5.91390538e-01],
       [ 5.53521990e-01,  5.46398827e-01],
       [ 6.03546292e-01,  5.06443341e-01],
       [ 6.09480754e-01,  5.15077633e-01],
       [ 7.01019729e-01,  4.01952649e-01],
       [ 6.51409548e-01,  4.95062712e-01],
       [ 4.44359240e-01,  6.98997360e-01],
       [ 7.34069473e-01,  4.05005517e-01],
       [ 7.28798637e-01,  4.34487151e-01],
       [ 7.38338100e-01,  4.38208315e-01],
       [ 8.67651351e-01,  4.24029310e-02],
       [ 8.03203770e-01,  3.56555522e-01],
       [ 7.68923828e-01,  4.45959194e-01],
       [ 7.32410158e-01,  5.21304324e-01],
       [ 8.04652554e-01,  4.23060927e-01],
       [ 8.89294348e-01,  2.32528163e-01],
       [ 9.23917301e-01,  9.98106714e-02],
       [ 9.27234521e-01,  1.50655625e-01],
       [ 9.28288578e-01,  1.99551935e-01],
       [ 9.53944793e-01,  1.03989119e-01],
       [ 9.58711716e-01, -1.45547444e-01],
       [ 9.37945723e-01, -2.83305316e-01],
       [ 9.84520254e-01, -1.03052804e-01],
       [ 9.98528299e-01,  5.42331575e-02],
       [ 0.00000000e+00, -0.00000000e+00],
       [ 1.00758089e-02, -7.13077965e-04],
       [ 1.99978974e-02, -2.86456246e-03],
       [ 2.82071454e-02, -1.10738698e-02],
       [ 3.82848975e-02, -1.29132917e-02],
       [ 4.37879091e-02, -2.51670250e-02],
       [ 5.19752893e-02, -3.11715237e-02],
       [ 5.41112323e-02, -4.55133430e-02],
       [ 8.06516919e-02, -5.02498899e-03],
       [ 7.22560715e-02, -5.51681334e-02],
       [ 8.59658305e-02, -5.30369351e-02],
       [ 1.09613385e-01, -1.81819914e-02],
       [ 1.09193322e-01, -5.26231589e-02],
       [ 1.13834030e-01, -6.54595450e-02],
       [ 1.10371622e-01, -8.84085091e-02],
       [ 1.33616105e-01, -7.14393281e-02],
       [ 9.61693089e-02, -1.29889367e-01],
       [ 1.19671874e-01, -1.23147999e-01],
       [ 1.04928736e-01, -1.48485055e-01],
       [ 7.61284754e-02, -1.76174435e-01],
       [ 1.40952650e-01, -1.44722191e-01],
       [ 8.69368761e-02, -1.93487437e-01],
       [ 6.15407978e-02, -2.13530902e-01],
       [ 2.97314899e-02, -2.30412940e-01],
       [ 7.02106428e-02, -2.32034435e-01],
       [ 1.73734176e-01, -1.83263306e-01],
       [ 1.07990039e-01, -2.39396544e-01],
       [ 1.25264701e-01, -2.42257961e-01],
       [ 6.00194503e-02, -2.76386510e-01],
       [ 1.56907231e-01, -2.47361459e-01],
       [-1.24526843e-03, -3.03027744e-01],
       [ 1.82069784e-02, -3.12601544e-01],
       [ 1.40322639e-01, -2.91184979e-01],
       [ 9.06795976e-02, -3.20762095e-01],
       [ 7.98078737e-02, -3.34032710e-01],
       [-7.44685990e-02, -3.45603348e-01],
       [-3.73460166e-02, -3.61713533e-01],
       [ 5.52127364e-03, -3.73696588e-01],
       [-2.24471522e-02, -3.83181459e-01],
       [-5.58080586e-02, -3.89966289e-01],
       [-1.19674038e-02, -4.03863132e-01],
       [-1.94419816e-01, -3.65669312e-01],
       [-9.80936022e-02, -4.12746023e-01],
       [-1.49577661e-01, -4.07775358e-01],
       [-9.77889392e-02, -4.33552981e-01],
       [-2.49277348e-01, -3.80095217e-01],
       [-1.18020038e-01, -4.49408064e-01],
       [-5.63022869e-02, -4.71397091e-01],
       [-1.40030732e-01, -4.64186867e-01],
       [-2.70689853e-01, -4.14369408e-01],
       [-3.06774336e-01, -4.01205084e-01],
       [-3.40807724e-01, -3.86304516e-01],
       [-3.69150864e-01, -3.73654727e-01],
       [-2.80003259e-01, -4.56291116e-01],
       [-3.58315206e-01, -4.11255243e-01],
       [-4.20896020e-01, -3.62613452e-01],
       [-4.34513724e-01, -3.62167329e-01],
       [-3.44379566e-01, -4.61410339e-01],
       [-3.99903511e-01, -4.28144210e-01],
       [-5.26039437e-01, -2.80089897e-01],
       [-5.14875025e-01, -3.19707940e-01],
       [-5.23183875e-01, -3.25474685e-01],
       [-5.84421830e-01, -2.25068881e-01],
       [-5.83793529e-01, -2.53266249e-01],
       [-5.95766856e-01, -2.50954961e-01],
       [-6.37950373e-01, -1.55234607e-01],
       [-5.82564999e-01, -3.24133408e-01],
       [-6.61888138e-01, -1.41133204e-01],
       [-6.57135334e-01, -1.99904343e-01],
       [-6.24069225e-01, -3.10329439e-01],
       [-7.01930968e-01,  8.50993629e-02],
       [-6.73793973e-01, -2.45635815e-01],
       [-7.15920654e-01, -1.27997020e-01],
       [-7.31343423e-01, -9.41107123e-02],
       [-7.47451564e-01, -5.88710399e-03],
       [-7.32942402e-01, -1.91615406e-01],
       [-7.33551852e-01, -2.26338905e-01],
       [-6.81683427e-01,  3.74494296e-01],
       [-7.83153925e-01,  8.61563349e-02],
       [-7.59620344e-01,  2.44435454e-01],
       [-7.96714210e-01,  1.35059468e-01],
       [-7.24038540e-01,  3.81037636e-01],
       [-6.61612575e-01,  4.98318416e-01],
       [-7.46687841e-01,  3.81241037e-01],
       [-8.06868401e-01,  2.62468897e-01],
       [-8.39210609e-01,  1.81370425e-01],
       [-8.29275978e-01,  2.58685579e-01],
       [-8.34907586e-01,  2.74221552e-01],
       [-7.87823086e-01,  4.11653060e-01],
       [-5.73717797e-01,  6.92120458e-01],
       [-5.14836608e-01,  7.49259333e-01],
       [-6.98892964e-01,  5.97044729e-01],
       [-4.55549197e-01,  8.09975479e-01],
       [-6.77001956e-01,  6.51252121e-01],
       [-6.22226831e-01,  7.17199017e-01],
       [-4.71938482e-01,  8.35522875e-01],
       [-6.26267558e-01,  7.40338543e-01],
       [-8.08639547e-01,  5.53268618e-01],
       [-6.71210026e-01,  7.27583061e-01],
       [-4.55377004e-01,  8.90298705e-01]];
       
// Classification data       

const Y1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
       1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
       2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
       2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
       2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
       2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
       
       
// To generate likewise in python
       
// import numpy as np
// import sklearn.datasets as skl
// import matplotlib.pyplot as plt
// 
// np.random.seed(0)
// X, y = skl.make_moons(200, noise=0.20)
// plt.scatter(X[:,0], X[:,1], s=40, c=y, cmap=plt.cm.Spectral)


const X2 = [[ 0.74346118,  0.46465633],
       [ 1.65755662, -0.63203157],
       [-0.15878875,  0.25584465],
       [-1.088752  , -0.39694315],
       [ 1.768052  , -0.25443213],
       [ 1.95416454, -0.12850579],
       [ 0.93694537,  0.36597075],
       [ 0.88446589, -0.47595401],
       [ 0.80950246,  0.3505231 ],
       [ 1.2278091 , -0.64785108],
       [-0.38454276,  0.50916381],
       [ 0.09252135, -0.31618454],
       [ 1.79531658, -0.32235591],
       [ 1.43861749, -0.15796611],
       [-0.82364866,  0.86822754],
       [ 0.99633397,  0.1731019 ],
       [ 0.66388701,  0.94659669],
       [ 0.13229471, -0.26032619],
       [ 0.2482245 ,  0.7860477 ],
       [-1.00392102,  1.15207238],
       [ 2.08208438,  0.00715606],
       [ 0.87081342, -0.4366643 ],
       [ 0.37268327,  1.01743002],
       [ 1.26735927, -0.11813675],
       [-0.13270154,  1.26653562],
       [ 0.20331   ,  0.19519454],
       [ 1.98373996, -0.11222315],
       [ 1.82749513, -0.03085446],
       [-0.03857867,  0.0838378 ],
       [ 0.03351023,  0.63113817],
       [ 0.94193283,  0.63204507],
       [-0.39131894,  0.40925201],
       [ 0.88357043, -0.35868845],
       [-0.01141219,  0.30437635],
       [ 0.75877114,  0.76057045],
       [ 1.79414416,  0.28323389],
       [ 0.56116634, -0.0330033 ],
       [ 0.87161309,  0.01715969],
       [-0.75191922,  0.63798317],
       [-0.21911253,  0.49662864],
       [ 0.63711933, -0.55537183],
       [-0.25531442,  0.83953933],
       [ 0.57753017,  0.64564015],
       [ 0.15931878, -0.02835184],
       [ 1.53296943, -0.36277826],
       [-0.24648981,  1.09136047],
       [ 1.16443301,  0.01495781],
       [-0.70574528,  0.54883003],
       [ 0.16919147, -0.30895665],
       [ 1.0717818 , -0.40141988],
       [-0.8970433 ,  0.87690996],
       [ 0.4828491 , -0.21452374],
       [ 2.25536302,  0.02862685],
       [-0.62523133,  0.03868576],
       [ 1.22821377, -0.50119159],
       [ 0.84248307,  0.55728315],
       [ 0.45857236,  0.5017019 ],
       [ 0.98031957, -0.56811367],
       [ 0.1059936 ,  0.90514125],
       [-0.21582418,  1.03521642],
       [ 0.06721632, -0.1649077 ],
       [-1.07873435,  0.36644163],
       [ 1.60172165, -0.37604995],
       [ 1.02592325,  0.42143427],
       [ 1.06739115, -0.38783511],
       [-1.35462041,  0.28524762],
       [-0.20784982,  1.09043495],
       [ 1.61652485, -0.29469483],
       [ 0.26375409,  0.91508367],
       [-0.99805184,  0.62420544],
       [ 0.62273618, -0.52804644],
       [-1.0873102 ,  0.78128608],
       [ 0.01262924, -0.59715374],
       [-0.52953439,  0.69307316],
       [ 0.78362442, -0.25844144],
       [-0.94262451,  0.57258351],
       [ 0.09048712,  0.0890939 ],
       [ 0.99716574,  0.35017425],
       [ 0.4630177 ,  0.86392418],
       [ 0.71787709, -0.09708361],
       [ 2.13330659,  0.11200406],
       [-0.41467068,  0.92254691],
       [ 0.6233932 , -0.69422694],
       [ 2.04970274,  0.66368306],
       [-0.00353234,  0.21487064],
       [-0.27631969,  1.34161045],
       [ 0.82262609, -0.02317445],
       [-0.46610015,  0.98764879],
       [ 0.64426474, -0.36209808],
       [ 1.96682571,  0.2646737 ],
       [ 0.71060915,  0.80990546],
       [ 1.12820353,  0.4664342 ],
       [ 1.99150162,  0.02534858],
       [-0.66342048,  0.85301441],
       [ 2.0436285 ,  0.24563453],
       [ 1.77377397, -0.10513907],
       [ 1.773464  , -0.34102513],
       [ 0.66137686, -0.31314104],
       [-1.15442774,  0.40574243],
       [ 0.04167562, -0.07462092],
       [ 1.40426435, -0.93206382],
       [ 1.99317676,  0.48903983],
       [ 0.17673342,  1.3178874 ],
       [ 1.12344625, -0.09556327],
       [-0.64018301,  0.75214137],
       [ 0.17295579,  0.60135526],
       [-0.97644617,  0.03612864],
       [-0.56357758,  1.15774717],
       [ 1.60440089, -0.35116358],
       [ 0.13387667,  0.6944329 ],
       [-0.59909677,  0.76903039],
       [ 0.1023533 ,  1.09326207],
       [-0.22047436,  1.28343927],
       [-0.70416708,  0.30649274],
       [ 0.95709601,  0.30502143],
       [ 1.65936346, -0.70351567],
       [ 0.18911691,  0.64887424],
       [ 2.02773677,  0.25021451],
       [ 0.6515764 , -0.40677494],
       [ 0.55688998,  0.26120887],
       [ 0.81816111,  0.78952806],
       [-0.48367053,  0.43679813],
       [-0.14739828,  0.22556193],
       [ 0.11834786,  0.99156023],
       [-0.25253387,  0.18776697],
       [-0.93313522,  0.73385959],
       [ 0.6975216 , -0.11832611],
       [ 0.33332321,  0.14006592],
       [ 1.06519327, -0.38867949],
       [ 1.9369961 ,  0.63112161],
       [ 1.05840957,  0.51858443],
       [-0.50840939,  0.55259494],
       [-1.32109805,  0.51437657],
       [ 0.29449971, -0.26078938],
       [ 1.33653621, -0.18005761],
       [ 1.51241178,  0.11081331],
       [ 1.01934807, -0.17993629],
       [-1.13305483,  0.11109962],
       [ 2.07463826,  0.51253705],
       [ 0.73451679,  0.5346233 ],
       [-0.12213442,  0.15292037],
       [-0.0557186 ,  0.57286794],
       [ 0.45046033,  1.09585861],
       [-0.7204608 ,  1.01733354],
       [-0.33698825,  0.89060661],
       [ 1.0628775 ,  0.17231496],
       [ 0.34005355,  0.32486358],
       [ 1.24491552, -0.5137574 ],
       [ 0.30966003,  1.16677531],
       [-0.06114159, -0.02921072],
       [ 0.48281721, -0.43196099],
       [ 1.68734249, -0.6872367 ],
       [ 0.80862106,  0.28415372],
       [ 0.29809162,  0.82211432],
       [ 0.8496547 , -0.30507345],
       [-0.3802171 ,  0.88414623],
       [ 1.32734432, -0.48056888],
       [ 0.23337057,  0.10750568],
       [ 0.68841773,  1.15068264],
       [ 0.6779624 ,  0.78024482],
       [ 0.3395913 , -0.02223857],
       [ 1.30440877, -0.52950917],
       [ 0.75307594,  0.8526869 ],
       [ 1.4298847 , -0.21080222],
       [ 0.55631903, -0.70781481],
       [ 1.45384401,  0.12718529],
       [ 0.3203754 ,  0.87271389],
       [ 0.53148147, -0.27424077],
       [ 1.51658699, -0.45069719],
       [ 0.99826403, -0.80979075],
       [ 0.63918299,  0.96606739],
       [-1.2855903 ,  0.10677262],
       [-1.07840959,  0.56402523],
       [-0.57716798,  0.2942259 ],
       [ 0.25403599, -0.00644002],
       [ 0.91722632, -0.29657499],
       [ 1.43380709,  0.69183071],
       [-0.70851168,  0.49617855],
       [-0.64683386,  0.46971252],
       [ 0.30143461,  0.76398572],
       [ 1.48069489, -0.3572808 ],
       [-1.02663961,  0.41265823],
       [ 1.89660871,  0.25413209],
       [ 2.04251223, -0.46074593],
       [ 1.92673019,  0.40817963],
       [ 0.35766276,  1.0872811 ],
       [ 0.1240315 ,  0.67672995],
       [ 0.97332087, -0.70530678],
       [-0.72894228,  0.44179419],
       [-0.69863061,  0.77620293],
       [-0.93516752,  0.43520803],
       [ 0.45166927,  1.00185497],
       [ 0.87629641,  0.28951999],
       [ 0.88155818,  0.23925957],
       [-0.07795147,  0.27995261],
       [-0.56365899,  0.8918972 ],
       [ 1.6049806 ,  0.13835516],
       [ 0.27695668,  0.01210816],
       [ 0.25919429,  1.04104213],
       [ 1.5215205 , -0.1258923 ]];

// Classification data       

const Y2 = [0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1,
       0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1,
       1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0,
       0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0,
       1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0,
       0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0,
       0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0,
       1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1,
       1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1,
       0, 1];

       
       































