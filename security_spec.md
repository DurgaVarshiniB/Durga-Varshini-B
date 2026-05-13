# Security Specification

## Data Invariants
- `userProgress` must only be accessible by the owner of the data (`userId == auth.uid`).
- `heroes`, `districts`, `stories`, and `quizQuestions` are read-only for all users and only writable by non-existent admin roles or system integrations.
- User progress must follow a strict schema to prevent integrity issues.

## The "Dirty Dozen" Payloads
1. **Identity Spoofing**: Attempt to write `userProgress` for another user.
2. **Ghost Field Injection**: Add `isAdmin: true` to a `userProgress` document.
3. **Relation Orphanage**: Create a progress record without a valid `userId`.
4. **State Shortcutting**: Manually add a badge without completing the required quiz (logic-level, but schema must be strict).
5. **PII Leak**: Attempt to read `userProgress` of another user.
6. **Denial of Wallet**: Write a 1MB string to a field in `userProgress`.
7. **Path Poisoning**: Use a 1.5KB string as a document ID for `userProgress`.
8. **Resource Exhaustion**: Creating 10,000 progress documents (limit by UID matches).
9. **Update Gap**: Changing `userId` on an existing `userProgress` doc.
10. **Type Mismatch**: Sending a string for `correctIndex` in `quizQuestions` (if it was writable).
11. **Negative Score**: Sending a negative quiz score (logic-level validation needed).
12. **Blanket Read attempt**: Querying all `userProgress` documents without a filter.

## Test Runner
See `firestore.rules.test.ts` (conceptual as I can't run full local tests easily, but I will ensure logic reflects this).
