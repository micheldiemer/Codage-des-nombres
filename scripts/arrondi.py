a = 0.1
b = 0.2
stored = 0.3
calculated = a + b
print("Calcul          : ",a,"+",b)
print("Valeur réelle   : ", stored)
print("Valeur calculée : ", calculated)
print("Différence      : ", calculated - stored)

print("Il faut toujours formater ou arrondir les flottants")
print("Valeur  : ", calculated)
print("Arrondi : ", round(calculated,8))
print("Formaté :  {:.8f}".format(calculated))

