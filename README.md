# Cargo Release Validator Action
## Description
GitHub Action that makes sure a Rust project's Cargo File contains a 
valid semantic version that makes sense.

## Rules
1. For tags, the Cargo File's version must match the tag name.
2. For tags and branches, the Cargo File's version must be a valid 
   [Semantic Version](https://semver.org/).
3. For tags, the tag must start with a prefix if specific in the 
   action's inputs.
