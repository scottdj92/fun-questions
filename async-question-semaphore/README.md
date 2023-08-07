# async-question-semaphore
This is a small exercise to address this fun question: https://twitter.com/thdxr/status/1686856181745111040?s=46&t=QGkUWADOO3g4eltYtb5SrQ

## Specs
For posterity, the specs are pasted below:
```text
JS challenge:
- you have a list of 1000 items
- you have an async function process(item)
- you need to process all items
- it needs to be done concurrently, but not more than 25 at a time
- collect items with errors
what's the cleanest way to do this?

libraries allowed
```