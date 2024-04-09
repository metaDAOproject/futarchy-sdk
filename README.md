# Futarchy TypeScript SDK for The MetaDAO

The Futarchy TypeScript SDK provides developers with a powerful, easy-to-use interface to interact with futarchy-based Solana programs deployed by The MetaDAO that enabled proposals powered by decision-markets. This SDK abstracts away ,any complexities, allowing developers to manage DAOs, proposals, and token balances with simple, asynchronous function calls.

## Features

- **DAO Management:** Fetch details of all DAOs or a specific DAO within The MetaDAO ecosystem.
- **Proposals:** Retrieve proposals associated with a DAO, along with their respective vaults.
- **Token Balances:** Query wallet balances of DAO tokens as well as conditional tokens of proposals for DAO members.

## Installation

To use the Futarchy TypeScript SDK in your project, you'll need to install it via npm or yarn. Ensure you have Node.js installed before proceeding.

```bash
npm install @themetadao/futarchy-ts
```

Or install via other package manager like yarn, pnpm, bun, etc.

## Usage

To start using the SDK, you need to import it into your project, along with necessary types from Solana's web3.js library. You can import the RPC client for example. Then you select the AUTOCRAT_VERSION you would like(0 is the latest). AUTOCRAT_VERSION refers to the version of the main Solana program that powers The MetaDAO.

```typescript
import { PublicKey } from "@solana/web3.js";
import { FutarchyRPCClient, AUTOCRAT_VERSIONS } from "@themetadao/futarchy-ts";
```

### Initializing the Client

Now with the goodies imported, initialize the `FutarchyRPCClient`.

```typescript
const provider = new AnchorProvider(connection, wallet, {});
const programVersion = AUTOCRAT_VERSIONS[0];
const client = FutarchyRPCClient.make(programVersion, provider);
```

### Fetching DAOs

To fetch all DAOs:

```typescript
const daos = await client.daos.fetchAllDaos();
```

To fetch a specific DAO by its address:

```typescript
const daoAddress = "YourDaoAddressHere";
const dao = await client.daos.fetchDao(daoAddress);
```

### Working with Proposals

To fetch proposals for a specific DAO:

```typescript
const proposals = await client.proposals.fetchProposals(dao);
```

### Managing Token Balances

To fetch main token wallet balances for a DAO member:

```typescript
const ownerWallet = new PublicKey("YourWalletPublicKeyHere");
const balances = await client.balances.fetchMainTokenWalletBalances(
  dao,
  ownerWallet
);
```
