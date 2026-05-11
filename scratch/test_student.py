class Student:
    school = "KL University"   # class property

    def __init__(self, name):
        self.name = name       # object property

s1 = Student("Vasu")
s2 = Student("Sudha")

print(s1.name)
print(s1.school)
print(s2.name)
print(s2.school)
