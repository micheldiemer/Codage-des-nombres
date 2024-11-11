import sys
import math

print("-"*80)
print("Minumum ", sys.float_info.min)
print("Maximum ", sys.float_info.max)
print("-"*80)
print("A partir de 17 chiffres la précision à l'unité est perdue")
a = float(1234567890123456)
a1 = a + 1
adiff = a1 - a
print("Nombre à 16 chiffres : ", a)
print("                  +1 : ", a+1, "      différence :  ", adiff)
b = a*10
b1 = b + 1
b4 = b + 4
b5 = b + 5
b10 = b + 10
bdiff1 = b1 - b
bdiff4 = b4 - b
bdiff5 = b5 - b
bdiff10 = b10 - b
print("Nombre à 17 chiffres : ", b)
for i in range(1,5):
  bdiff = float(b + i) - b
  print("                 ",end="")
  if(i<10):
     print(" ", end="")
  print("+" + str(i), ": ", b+i, end="")
  if(i==1 or i==10):
    print(" ", end="")
  print("   différence :  ",end="")
  if(i<10):
     print(" ", end="")
  print(bdiff)

print("-"*80)
for a in range(0,21):
    x = float(10**a)
    x_next = math.nextafter(x, math.inf)
    diff = x_next - x
    print("10^", end="")
    if(a<10):
        print(" ", end="")
    print(a, "différence avec le prochain nombre : ", end="")
    n, d = diff.as_integer_ratio()
    str_ratio = str(n) + "/" + str(d)
    if(diff < 0.0001220703125):
        print("         ", diff, str_ratio)
    else:
        if(diff < 0.125 ):
            print("   ",diff, str_ratio)
        else:
            if(diff < 1):
                print("   ", diff)
            else:
                print("{:5d}".format(int(diff)))
print("-"*80)