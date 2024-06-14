# ts-assertions

A TypeScript library for type assertions.

## Installation

```bash
npm install ep@ts-assertions
```

## Usage

```typescript
import { assert_string } from 'ts-assertions';

const value: any = 'hello';
assert_string(value); // No error
assert_string(123); // Throws error
```
