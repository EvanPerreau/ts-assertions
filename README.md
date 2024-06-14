# ts-assertions

A TypeScript library for type assertions.

## Installation

```bash
npm install ts-simple-assertions
```

## Usage

```typescript
import { assert_string } from 'ts-assertions';

const value: any = 'hello';
assertString(value); // No error
assertString(123); // Throws error
```
