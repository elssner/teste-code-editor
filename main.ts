pins.onKeyboardEvent(function (zeichenCode, zeichenText, isASCII) {
    codeeditor.keyboardEvent(zeichenCode, zeichenText)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
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
})
matrix.init(matrix.ePages.y128)
matrix.displayMatrix()
loops.everyInterval(50, function () {
    pins.raiseKeyboardEvent(true)
})
