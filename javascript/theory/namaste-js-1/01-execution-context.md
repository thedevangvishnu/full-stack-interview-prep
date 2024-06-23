# Execution Context

## What

- Execution context is like a big box where the entire JS code is executed.
- It has two main components:

  - Memory (aka Variable Environment)
    - This is the place where all variables and functions are stored as key value pairs.
  - Code (Thread of Execution)

    - This is the place where the entire js code is executed one line at a time.

- Key point to remember:

          JavaScript is synchronous single-threaded language

  - Explanation:

        - Synchronous: In Js, the code run sequentially. Synchronous means that, only when one operation is done, the next one can be executed. If any one operation takes a long time, the code execution gets blocked at that point and continues when that operation is finished.

        - Single-threaded: Thread is the smallest sequence of instructions that can be managed independently by the OS. Single thread can only run one instruction at a time. Meaning JS can only run one line at a time and can only perform one task in the given flow of execution.
