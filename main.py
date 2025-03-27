"""

使用此文件来定义自定义函数和图形块。
想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom

"""
# % block="one"
# % block="two"
class MyEnum(Enum):
    One = 0
    Two = 1
"""

mbe blocks

"""
# % weight=100 color=#0fbc11 icon=""
@namespace
class mbe2:
    """
    
    TODO: describe your function here
    @param n describe parameter here, eg: 5
    @param s describe parameter here, eg: "Hello"
    @param e describe parameter here
    
    """
    # % block
    def foo(n: number, s: str, e: MyEnum):
        # Add code here
        basic.show_string("Hello mbe!")
    """
    
    TODO: describe your function here
    @param value describe value here, eg: 5
    
    """
    # % block
    def fib(value: number):
        return value if value <= 1 else fib(value - 1) + fib(value - 2)