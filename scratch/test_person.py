class Person:
    lastname = ""   # class property

    def __init__(self, name):
        self.name = name   # object property

    def show_name(self):
        print(f"Hello, I'm {self.name} {self.lastname}")


p1 = Person("Vasu")
p2 = Person("Vasudha")

# Changing the class property
Person.lastname = "Chintada"

print(f"p1.lastname: {p1.lastname}")
print(f"p2.lastname: {p2.lastname}")

p1.show_name()
p2.show_name()
