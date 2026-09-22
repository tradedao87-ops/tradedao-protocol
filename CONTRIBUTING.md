# Contributing to TradeDAO Protocol

Thank you for your interest in contributing to the TradeDAO open-source ecosystem, documentation, and telemetry tooling.

---

## Code of Conduct

All contributors and community participants are expected to adhere to professional, respectful, and constructive standards of collaboration.

---

## Development Workflow

1. **Fork the Repository:** Create a fork under your personal GitHub account.
2. **Branch Strategy:**
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```
3. **SDK Guidelines:**
   - Write clear TypeScript with strict type checking enabled.
   - Maintain backwards compatibility for public telemetry methods.
   - Run typecheck before committing:
     ```bash
     cd sdk && npm run build
     ```
4. **Submitting a Pull Request:**
   - Provide a concise summary of changes and reference relevant issue numbers.
   - Ensure all CI tests pass cleanly.
