class ZeroDenominatorError(ZeroDivisionError):
    pass
try:
    a = 10
    b = 0
    if(b==0):
        raise ZeroDenominatorError()
    c = a/b
except ZeroDivisionError:
    print('Zero Division Error occured',end= ' ')
except ZeroDenominatorError:
    print('Zero Denominator Error occured',end = ' ')
else:
    print('else works')