import math

# a , b , c = input().split(" ")
# a = float(a)
# b = float(b)
# c = float(c)

a , b , c = map(float, input().split())

delta = b**2 - 4 * a * c

if (delta < 0 or a == 0):
    print("Impossivel calcular")
else:
    r1 = (-b + math.sqrt(delta)) / (2 * a)
    r2 = (-b - math.sqrt(delta)) / (2 * a)

print("R1 = {:.5f}\nR2 = {:.5f}".format(r1,r2) )
