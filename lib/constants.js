import PoolWithMultipleWinnersBuilderMainnet from '@pooltogether/pooltogether-contracts/deployments/mainnet/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderRinkeby from '@pooltogether/pooltogether-contracts/deployments/rinkeby/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderSokol from '@pooltogether/pooltogether-contracts/deployments/poaSokol/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderMatic from '@pooltogether/pooltogether-contracts/deployments/matic/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderKovan from '@pooltogether/pooltogether-contracts/deployments/kovan/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderMumbai from '@pooltogether/pooltogether-contracts/deployments/mumbai/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderXDai from '@pooltogether/pooltogether-contracts/deployments/xdai/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderBsc from '@pooltogether/pooltogether-contracts/deployments/bsc/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderBscTestnet from '@pooltogether/pooltogether-contracts/deployments/bscTestnet/PoolWithMultipleWinnersBuilder.json'

import RNGBlockhashMainnet from '@pooltogether/pooltogether-rng-contracts/deployments/mainnet/RNGBlockhash.json'
import RNGBlockhashRinkeby from '@pooltogether/pooltogether-rng-contracts/deployments/rinkeby/RNGBlockhash.json'
import RNGBlockhashSokol from '@pooltogether/pooltogether-rng-contracts/deployments/poaSokol_77/RNGBlockhash.json'
import RNGBlockhashKovan from '@pooltogether/pooltogether-rng-contracts/deployments/kovan/RNGBlockhash.json'
import RNGBlockhashXDai from '@pooltogether/pooltogether-rng-contracts/deployments/xdai_100/RNGBlockhash.json'
import RNGBlockhashMatic from '@pooltogether/pooltogether-rng-contracts/deployments/matic_137/RNGBlockhash.json'
import RNGBlockhashBsc from '@pooltogether/pooltogether-rng-contracts/deployments/bsc_56/RNGBlockhash.json'
import RNGBlockhashBscTestnet from '@pooltogether/pooltogether-rng-contracts/deployments/bscTestnet_97/RNGBlockhash.json'

import RNGChainlinkMainnet from '@pooltogether/pooltogether-rng-contracts/deployments/mainnet/RNGChainlink.json'
import RNGChainlinkRinkeby from '@pooltogether/pooltogether-rng-contracts/deployments/rinkeby/RNGChainlink.json'
import RNGChainlinkKovan from '@pooltogether/pooltogether-rng-contracts/deployments/kovan/RNGChainlink.json'
// import RNGChainlinkBsc from '@pooltogether/pooltogether-rng-contracts/deployments/bsc/RNGChainlink.json'
// import RNGChainlinkBscTestnet from '@pooltogether/pooltogether-rng-contracts/deployments/bscTestnet/RNGChainlink.json'

export const TICKET_DECIMALS = '18'

export const DEFAULT_TOKEN_PRECISION = 18

export const PRIZE_POOL_TYPE = Object.freeze({
  compound: 'compound',
  stake: 'stake',
  yield: 'yield'
})

export const ETHEREUM_NETWORKS = [1, 3, 4, 5, 42]
export const SUPPORTED_NETWORKS = [1, 4, 42, 56, 77, 97, 100, 137, 31337, 80001]

export const CTOKEN_UNDERLYING_TOKEN_DECIMALS = Object.freeze({
  cDai: 18,
  cUsdc: 6,
  cComp: 18,
  cUni: 18,
  cUsdt: 6,
  cBat: 18,
  cWbtc: 8,
  cZrx: 18,
  fFei8: 18,
  fTribe8: 18
})

export const CONTRACT_ADDRESSES = {
  1: {
    COMPOUND: {
      cDai: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
      cUsdc: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
      cUsdt: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
      cBat: '0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E',
      cComp: '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4',
      cUni: '0x35a18000230da775cac24873d00ff85bccded550',
      cWbtc: '0xC11b1268C1A384e55C48c2391d8d480264A3A7F4',
      cZrx: '0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407',
      fFei8: '0xd8553552f8868C1Ef160eEdf031cF0BCf9686945',
      fTribe8: '0xFd3300A9a74b3250F1b2AbC12B47611171910b07'
    },
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderMainnet.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashMainnet.address,
      chainlink: RNGChainlinkMainnet.address
    }
  },
  4: {
    COMPOUND: {
      cDai: '0x6D7F0754FFeb405d23C51CE938289d4835bE3b14',
      cUsdc: '0x5B281A6DdA0B271e91ae35DE655Ad301C976edb1',
      cUsdt: '0x2fB298BDbeF468638AD6653FF8376575ea41e768',
      cBat: '0xEBf1A11532b93a529b5bC942B4bAA98647913002',
      cWbtc: '0x0014F450B8Ae7708593F4A46F8fa6E5D50620F96',
      cZrx: '0x52201ff1720134bBbBB2f6BC97Bf3715490EC19B'
    },
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderRinkeby.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashRinkeby.address,
      chainlink: RNGChainlinkRinkeby.address
    }
  },
  42: {
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderKovan.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashKovan.address,
      chainlink: RNGChainlinkKovan.address
    },
    COMPOUND: {
      cBat: '0x4a77faee9650b09849ff459ea1476eab01606c7a',
      cDai: '0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad',
      cRep: '0xa4ec170599a1cf87240a35b9b1b8ff823f448b57',
      cSai: '0xb3f7fb482492f4220833de6d6bfcc81157214bec',
      cUsdc: '0x4a92e71227d294f041bd82dd8f78591b75140d63',
      cUsdt: '0x3f0a0ea2f86bae6362cf9799b523ba06647da018',
      cWbtc: '0xa1faa15655b0e7b6b6470ed3d096390e6ad93abb',
      cZrx: '0xaf45ae737514c8427d373d50cd979a242ec59e5a'
    }
  },
  56: {
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderBsc.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashBsc.address
      // chainlink: RNGChainlinkBsc.address
    }
  },
  77: {
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderSokol.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashSokol.address
    }
  },
  97: {
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderBscTestnet.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashBscTestnet.address
      // chainlink: RNGChainlinkBscTestnet.address
    }
  },
  100: {
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderXDai.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashXDai.address
    }
  },
  137: {
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderMatic.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashMatic.address
    }
  },
  80001: {
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderMumbai.address,
    RNG_SERVICE: {}
  },
  31337: {
    COMPOUND: {
      cDai: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
      cUsdc: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
      cUsdt: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
      cBat: '0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E',
      cComp: '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4',
      cUni: '0x35a18000230da775cac24873d00ff85bccded550',
      cWbtc: '0xC11b1268C1A384e55C48c2391d8d480264A3A7F4',
      cZrx: '0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407'
    },
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderMainnet.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashMainnet.address,
      chainlink: RNGChainlinkMainnet.address
    }
  }
}

export const DEFAULT_INPUT_CLASSES =
  'w-full text-inverse bg-transparent trans focus:outline-none leading-none'
export const DEFAULT_INPUT_LABEL_CLASSES = 'mt-0 mb-1 text-xs sm:text-sm'
export const DEFAULT_INPUT_GROUP_CLASSES = 'trans py-2 px-5 sm:py-4 sm:px-10 bg-body'

export const MAX_EXIT_FEE_PERCENTAGE = 10
export const MAX_TIMELOCK_DURATION_COEFFICIENT = 4
export const FEE_DECAY_DURATION_COEFFICIENT = 2

// Cookie strings
export const SELECTED_WALLET_COOKIE_KEY = 'selectedWallet'

// Min decimal for day inputs to allow minutes (0.0001 ≈ 8 seconds)
export const DAYS_STEP = 0.0001

export const NETWORKS = {
  'ropsten': {
    value: 'ropsten',
    view: 'Ropsten'
  },
  'rinkeby': {
    value: 'rinkeby',
    view: 'Rinkeby'
  },
  'mainnet': {
    value: 'mainnet',
    view: 'Mainnet'
  },
  'kovan': {
    value: 'kovan',
    view: 'Kovan'
  },
  'poa-sokol': {
    value: 'poa-sokol',
    view: 'Sokol (POA)'
  },
  'xdai': {
    value: 'xdai',
    view: 'xDai'
  },
  'matic': {
    value: 'matic',
    view: 'Matic'
  },
  'mumbai': {
    value: 'mumbai',
    view: 'Mumbai (Matic)'
  },
  'bsc': {
    value: 'bsc',
    view: 'Binance Smart Chain (BSC)'
  },
  'bsc-testnet': {
    value: 'bsc-testnet',
    view: 'Binance Smart Chain Testnet'
  },
  'local': {
    value: 'local',
    view: 'Local'
  }
}
