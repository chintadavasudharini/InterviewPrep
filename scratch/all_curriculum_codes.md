# ALL CODING CURRICULUM CODES

This file contains the complete, verified Python code snippets for all **40** topics in the Coding Curriculum, extracted directly from the application data store.

## 01. Reverse a Number
> **Definition**: Reversing a number involves rearranging its digits in reverse order using mathematical operations like modulo and integer division.

```python
n = 1234
rev = 0

while n > 0:
    digit = n % 10
    rev = rev * 10 + digit
    n = n // 10

print(rev)
```

---

## 02. Palindrome Number
> **Definition**: A palindrome number is a number that remains the same when its digits are reversed (e.g., 121, 1331).

```python
n = 121
temp = n
rev = 0

while n > 0:
    digit = n % 10
    rev = rev * 10 + digit
    n = n // 10

if temp == rev:
    print("Palindrome")
else:
    print("Not Palindrome")
```

---

## 03. Armstrong Number
> **Definition**: An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits (e.g., 153 = 1³ + 5³ + 3³).

```python
n = 153
temp = n
power = len(str(n))
sum = 0

while n > 0:
    digit = n % 10
    sum = sum + digit ** power
    n = n // 10

if temp == sum:
    print("Armstrong Number")
else:
    print("Not Armstrong Number")
```

---

## 04. Factorial of a Number
> **Definition**: The factorial of a non-negative integer n is the product of all positive integers less than or equal to n (e.g., 5! = 5 × 4 × 3 × 2 × 1 = 120).

```python
# Using For Loop
n = 5
fact = 1
for i in range(1, n + 1):
    fact = fact * i
print(fact)

# Using While Loop (Without Range)
n = 5
fact = 1
i = 1
while i <= n:
    fact = fact * i
    i = i + 1
print(fact)
```

---

## 05. Fibonacci Series
> **Definition**: The Fibonacci series is a sequence where each number is the sum of the two preceding ones, starting from 0 and 1 (e.g., 0, 1, 1, 2, 3, 5, 8, ...).

```python
# Using While Loop
n = 10
a = 0
b = 1
count = 1
while count <= n:
    print(a, end=" ")
    c = a + b
    a = b
    b = c
    count = count + 1

# Using For Loop
n = 10
a = 0
b = 1
for i in range(n):
    print(a, end=" ")
    c = a + b
    a = b
    b = c
```

---

## 06. Prime Number
> **Definition**: A prime number is a natural number greater than 1 that is only divisible by 1 and itself (e.g., 2, 3, 5, 7, 11, ...).

```python
# Using While Loop
n = 7
count = 0
i = 1
while i <= n:
    if n % i == 0:
        count += 1
    i = i + 1
if count == 2:
    print("Prime")
else:
    print("Not Prime")

# Using For Loop
n = 7
count = 0
for i in range(1, n + 1):
    if n % i == 0:
        count += 1
if count == 2:
    print("Prime")
else:
    print("Not Prime")
```

---

## 07. Factors of a Number
> **Definition**: Factors are numbers that divide a given integer completely without leaving any remainder (e.g., factors of 12 are 1, 2, 3, 4, 6, 12).

```python
num = int(input("Enter a number: "))

print("Factors are:")

for i in range(1, num + 1):
    if num % i == 0:
        print(i)
```

---

## 08. Count Factors
> **Definition**: Counting factors is the process of determining the total number of integer divisors that a given number has, excluding any remainders.

```python
num = int(input("Enter a number: "))

count = 0

for i in range(1, num + 1):
    if num % i == 0:
        count = count + 1

print("Total Factors =", count)
```

---

## 09. Sum of Factors
> **Definition**: Find the sum of all factors of a number. This represents the total value obtained by adding all divisors of the number.

```python
num = int(input("Enter a number: "))

sum = 0

for i in range(1, num + 1):
    if num % i == 0:
        sum = sum + i

print("Sum of Factors =", sum)
```

---

## 10. Prime Factors of a Number
> **Definition**: Prime factors are the factors of a number that are also prime numbers. Every integer greater than 1 has a unique prime factorization.

```python
num = int(input("Enter a number: "))

print("Prime Factors are:")

for i in range(2, num + 1):
    if num % i == 0:
        prime = True
        for j in range(2, i):
            if i % j == 0:
                prime = False
                break
        if prime:
            print(i)
```

---

## 11. Swap Two Numbers
> **Definition**: Swapping two numbers means interchanging their values so that each variable holds the other's original value.

```python
# Method 1: Using Temporary Variable
a = 10
b = 20
temp = a
a = b
b = temp
print("After Swap (Temp):", a, b)

# Method 2: Without Temporary Variable
a = 10
b = 20
a = a + b
b = a - b
a = a - b
print("After Swap (Arithmetic):", a, b)
```

---

## 12. Count Digits in a Number
> **Definition**: Counting digits is the process of determining the total number of individual digits that form a numerical value.

```python
# Method 1: Using While Loop
n = 12345
count = 0
while n > 0:
    count += 1
    n = n // 10
print("Count (Loop):", count)

# Method 2: Using String Conversion
n = 12345
count = len(str(n))
print("Count (String):", count)
```

---

## 13. Simple Calculator
> **Definition**: A simple calculator implementation using conditional statements to perform basic mathematical operations like addition, subtraction, multiplication, and division.

```python
def calculator(a, b, op):
    if op == "+":
        return a + b
    elif op == "-":
        return a - b
    elif op == "*":
        return a * b
    elif op == "/":
        return a / b
    else:
        return "Invalid Operator"

# Example Usage
print("Result:", calculator(10, 5, "*"))
```

---

## 14. Sum of Digits
> **Definition**: Sum of digits is the calculation of the total value obtained by adding every individual digit in a number (e.g., 123 -> 1+2+3 = 6).

```python
# Method 1: Using While Loop
n = 123
sum = 0
while n > 0:
    digit = n % 10
    sum = sum + digit
    n = n // 10
print("Sum (Loop):", sum)

# Method 2: Using String Conversion
n = 123
sum = 0
for digit in str(n):
    sum = sum + int(digit)
print("Sum (String):", sum)
```

---

## 15. Product of Digits
> **Definition**: Product of digits is the calculation of the total value obtained by multiplying every individual digit in a number (e.g., 123 -> 1*2*3 = 6).

```python
# Method 1: Using While Loop
n = 123
mul = 1
while n > 0:
    digit = n % 10
    mul = mul * digit
    n = n // 10
print("Product (Loop):", mul)

# Method 2: Using String Conversion
n = 123
mul = 1
for digit in str(n):
    mul = mul * int(digit)
print("Product (String):", mul)
```

---

## 16. Multiplication Table
> **Definition**: Generating a multiplication table involves iterating through a range of numbers and multiplying them by a base value to display the products in a structured format.

```python
# Method 1: Using For Loop
def print_table(num):
    for i in range(1, 11):
        print(f"{num} x {i} = {num * i}")

# Method 2: Using While Loop
n = 5
i = 1
while i <= 10:
    print(f"{n} x {i} = {n * i}")
    i += 1
```

---

## 17. Leap Year Check
> **Definition**: A leap year is a year containing an extra day (366 days instead of 365) to align the calendar with the Earth's orbit around the Sun.

```python
year = 2024

if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    print("Leap Year")
else:
    print("Not Leap Year")
```

---

## 18. Check Divisibility
> **Definition**: This algorithm checks whether a given number is completely divisible by another number (a divisor) without leaving a remainder.

```python
num = int(input("Enter number: "))
divisor = int(input("Enter divisor: "))

if num % divisor == 0:
    print(num, "is divisible by", divisor)
else:
    print(num, "is not divisible by", divisor)
```

---

## 19. Even or Odd Number
> **Definition**: An even number is any integer that can be divided exactly by 2, whereas an odd number always leaves a remainder of 1 when divided by 2.

```python
def check_even_odd(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Example Usage
n = 10
print(f"{n} is {check_even_odd(n)}")
```

---

## 20. Largest of Three Numbers
> **Definition**: Determining the largest of three numbers involves comparing the values to identify the one with the highest numerical magnitude.

```python
# Method 1: Using If-Elif-Else
a = 10
b = 50
c = 30
if a > b and a > c:
    print(a)
elif b > c:
    print(b)
else:
    print(c)

# Method 2: Using Built-in max()
def find_largest(a, b, c):
    return max(a, b, c)
print("Largest:", find_largest(10, 50, 30))
```

---

## 21. Sum of Natural Numbers
> **Definition**: The sum of natural numbers is the cumulative total of all positive integers from 1 up to a specified value 'n'.

```python
# Method 1: Using While Loop
def natural_sum_loop(n):
    sum = 0
    i = 1
    while i <= n:
        sum = sum + i
        i += 1
    return sum

# Method 2: Using For Loop
n = 5
sum = 0
for i in range(1, n + 1):
    sum += i

# Method 3: Using Formula
def natural_sum_formula(n):
    return n * (n + 1) // 2
```

---

## 22. Sum of First N Even Numbers
> **Definition**: Calculating the sum of the first N even numbers (2, 4, 6, 8, ...) can be achieved either using a loop to generate and add each even number or via a mathematical formula n * (n + 1) for constant-time complexity.

```python
# Method 1: Iterative Approach
n = int(input("Enter n: "))
sum = 0
even = 2
for i in range(n):
    sum = sum + even
    even = even + 2
print("Sum =", sum)

# Method 2: Formula Method (O(1) Time)
# sum = n * (n + 1)
```

---

## 23. Sum of First N Odd Numbers
> **Definition**: Calculating the sum of the first N odd numbers (1, 3, 5, 7, ...) can be achieved either using a loop to generate and add each odd number or via a mathematical formula n^2 for constant-time complexity.

```python
# Method 1: Iterative Approach
n = int(input("Enter n: "))
sum = 0
odd = 1
for i in range(n):
    sum = sum + odd
    odd = odd + 2
print("Sum =", sum)

# Method 2: Formula Method (O(1) Time)
# sum = n ** 2
```

---

## 24. Positive, Negative, or Zero Check
> **Definition**: Determining the state of a number involves comparing it against zero to categorize it as positive, negative, or zero.

```python
def check_number(n):
    if n > 0:
        return "Positive"
    elif n < 0:
        return "Negative"
    else:
        return "Zero"

# Example Usage
n = -5
print(f"{n} is {check_number(n)}")
```

---

## 25. Count Even and Odd Digits
> **Definition**: This algorithm iterates through each digit of a number and determines whether it is even or odd, maintaining a count for both categories.

```python
def count_even_odd(n):
    even = 0
    odd = 0
    while n > 0:
        digit = n % 10
        if digit % 2 == 0:
            even += 1
        else:
            odd += 1
        n = n // 10
    print("Even Count:", even)
    print("Odd Count:", odd)

# Example Usage
count_even_odd(12345)
```

---

## 26. Krishnamurthy Number
> **Definition**: A Krishnamurthy number is a special number whose sum of factorials of its digits is equal to the original number itself (e.g., 145 = 1! + 4! + 5!).

```python
num = int(input("Enter a number: "))
temp = num
sum = 0

while num > 0:
    digit = num % 10
    fact = 1
    for i in range(1, digit + 1):
        fact = fact * i
    sum = sum + fact
    num = num // 10

if temp == sum:
    print("Krishnamurthy Number")
else:
    print("Not a Krishnamurthy Number")
```

---

## 27. Perfect Number
> **Definition**: A perfect number is a positive integer that equals the sum of its proper divisors (excluding the number itself). For example, 6 has divisors 1, 2, and 3, and 1+2+3 = 6.

```python
# Using While Loop
n = 28
sum = 0
i = 1
while i < n:
    if n % i == 0:
        sum = sum + i
    i += 1
if sum == n:
    print("Perfect Number")
else:
    print("Not Perfect")

# Using For Loop
n = 6
sum = 0
for i in range(1, n):
    if n % i == 0:
        sum += i
if sum == n:
    print("Perfect Number")
else:
    print("Not Perfect")
```

---

## 28. Strong Number
> **Definition**: A strong number is a special number whose sum of factorials of its digits is equal to the original number (e.g., 145 -> 1! + 4! + 5! = 1 + 24 + 120 = 145).

```python
# Method 1: Using While Loops
def check_strong(n):
    temp = n
    sum = 0
    while n > 0:
        digit = n % 10
        fact = 1
        i = 1
        while i <= digit:
            fact *= i
            i += 1
        sum += fact
        n //= 10
    return "Strong Number" if sum == temp else "Not Strong"

# Method 2: Using For Loop for Factorial
n = 145
temp, sum = n, 0
while n > 0:
    digit = n % 10
    fact = 1
    for i in range(1, digit + 1):
        fact *= i
    sum += fact
    n //= 10
print("Strong Number" if sum == temp else "Not Strong")
```

---

## 29. Neon Number
> **Definition**: A neon number is a number where the sum of digits of its square is equal to the original number (e.g., 9^2 = 81, and 8 + 1 = 9).

```python
n = 9

square = n * n
sum = 0

while square > 0:
    digit = square % 10
    sum += digit
    square = square // 10

if sum == n:
    print("Neon Number")
else:
    print("Not Neon Number")
```

---

## 30. Happy Number
> **Definition**: A happy number is a number that eventually becomes 1 when you repeatedly replace it with the sum of the squares of its digits. If the process enters a loop that never reaches 1, the number is unhappy (or sad).

```python
num = int(input("Enter a number: "))

original = num

while num != 1 and num != 4:
    total = 0

    while num > 0:
        digit = num % 10
        total = total + (digit * digit)
        num = num // 10

    num = total

if num == 1:
    print(original, "is a Happy Number")
else:
    print(original, "is not a Happy Number")
```

---

## 31. Magic Number
> **Definition**: A magic number is a number in which the eventual sum of digits (calculated recursively until a single digit is obtained) is equal to 1.

```python
num = int(input("Enter a number: "))
temp = num

while num > 9:
    sum = 0
    while num > 0:
        digit = num % 10
        sum = sum + digit
        num = num // 10
    num = sum

if num == 1:
    print(temp, "is a Magic Number")
else:
    print(temp, "is not a Magic Number")
```

---

## 32. HCF and LCM
> **Definition**: HCF (Highest Common Factor / Greatest Common Divisor) is the largest positive integer that divides two or more integers without leaving a remainder. LCM (Least Common Multiple) is the smallest positive integer that is divisible by two or more integers. They are related by the equation: HCF * LCM = Product of the Numbers.

```python
# 1. HCF and LCM (Euclidean Algorithm - Highly Efficient)
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

x, y = a, b
while y != 0:
    x, y = y, x % y
hcf = x
lcm = (a * b) // hcf

print("HCF =", hcf)
print("LCM =", lcm)

# 2. HCF Basic (Listing Method)
# small = min(a, b)
# for i in range(small, 0, -1):
#     if a % i == 0 and b % i == 0:
#         hcf = i
#         break

# 3. LCM Basic (Listing Method)
# large = max(a, b)
# while True:
#     if large % a == 0 and large % b == 0:
#         lcm = large
#         break
#     large += 1

# 4. Shortcut using Math module
# import math
# hcf = math.gcd(a, b)
# lcm = (a * b) // math.gcd(a, b)
```

---

## 33. Coprime Numbers
> **Definition**: Two numbers are coprime (or relatively prime) if their highest common factor (HCF/GCD) is exactly 1. They share no common positive divisors other than 1.

```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

hcf = 1

for i in range(1, min(a, b) + 1):
    if a % i == 0 and b % i == 0:
        hcf = i

if hcf == 1:
    print("Coprime Numbers")
else:
    print("Not Coprime Numbers")
```

---

## 34. Power of a Number
> **Definition**: Calculating the power of a number involves multiplying a base number by itself multiple times, as defined by the exponent or power value (e.g., 2³ = 2 × 2 × 2 = 8).

```python
base = int(input("Enter base: "))
exponent = int(input("Enter exponent: "))

result = 1
for i in range(exponent):
    result = result * base

print("Result =", result)
```

---

## 35. Decimal to Binary
> **Definition**: Converting a decimal number (base-10) to a binary number (base-2) involves repeatedly dividing the number by 2 and prepending the remainders to a string.

```python
num = int(input("Enter decimal number: "))
temp = num
binary = ""

if num == 0:
    binary = "0"
else:
    while num > 0:
        remainder = num % 2
        binary = str(remainder) + binary
        num = num // 2

print("Binary =", binary)
```

---

## 36. Binary to Decimal
> **Definition**: Converting a binary number (base-2) to a decimal number (base-10) involves multiplying each digit of the binary string by 2 raised to the power of its position (starting from 0 on the right) and summing up the results.

```python
binary = input("Enter binary number: ")
decimal = 0
power = 0

for digit in reversed(binary):
    decimal = decimal + int(digit) * (2 ** power)
    power = power + 1

print("Decimal =", decimal)
```

---

## 37. Decimal to Octal
> **Definition**: Converting a decimal number (base-10) to an octal number (base-8) involves repeatedly dividing the number by 8 and prepending the remainders to a string.

```python
num = int(input("Enter decimal number: "))
octal = ""

if num == 0:
    octal = "0"
else:
    while num > 0:
        remainder = num % 8
        octal = str(remainder) + octal
        num = num // 8

print("Octal =", octal)
```

---

## 38. Octal to Decimal
> **Definition**: Converting an octal number (base-8) to a decimal number (base-10) involves multiplying each digit of the octal string by 8 raised to the power of its position (starting from 0 on the right) and summing up the results.

```python
octal = input("Enter octal number: ")
decimal = 0
power = 0

for digit in reversed(octal):
    decimal = decimal + int(digit) * (8 ** power)
    power = power + 1

print("Decimal =", decimal)
```

---

## 39. Decimal to Hexadecimal
> **Definition**: Converting a decimal number (base-10) to a hexadecimal number (base-16) involves repeatedly dividing the number by 16 and mapping remainders 10-15 to letters A-F.

```python
num = int(input("Enter decimal number: "))
temp = num
hex_chars = "0123456789ABCDEF"
hexadecimal = ""

if num == 0:
    hexadecimal = "0"
else:
    while num > 0:
        remainder = num % 16
        hexadecimal = hex_chars[remainder] + hexadecimal
        num = num // 16

print("Hexadecimal =", hexadecimal)
```

---

## 40. Hexadecimal to Decimal
> **Definition**: Converting a hexadecimal number (base-16) to a decimal number (base-10) involves multiplying each character of the hex string by 16 raised to the power of its position, mapping A-F to values 10-15.

```python
hex_str = input("Enter hexadecimal number: ").upper()
hex_chars = "0123456789ABCDEF"
decimal = 0
power = 0

for char in reversed(hex_str):
    value = hex_chars.index(char)
    decimal = decimal + value * (16 ** power)
    power = power + 1

print("Decimal =", decimal)
```

---

