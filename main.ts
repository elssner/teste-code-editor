matrix.init(matrix.ePages.y128)
matrix.displayMatrix()
codeeditor.run([
"read",
"jump lp",
"",
"lp:",
"jump.eq.0 even",
"jump.sm.0 odd",
"push 2",
"sub",
"jump lp",
"",
"even:",
"print even!",
"halt",
"",
"odd:",
"print odd!",
"halt"
])
loops.everyInterval(50, function () {
    pins.raiseKeyboardEvent(true)
})
