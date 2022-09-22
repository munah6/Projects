# A program that determines whether a provided credit card number is valid
# according to Luhn’s algorithm.

# Functions

# Gets the card number


def getCardNumber():
    return int(cardNumber)

# Checks the length of the card


def validateLength(n):

    cardLen = len(str(n))

    if (not(cardLen == 13) and not(cardLen == 15) and not(cardLen == 16)):
        return False
    else:
        return True


# Checks whether the card number is valid based on Luhn's Algorithm


def validateCardNumber(n):

    sum = 0
    cardLen = len(str(n))

    # Find every 2nd number:
    for i in range(0, cardLen, 2):

        everyOtherNumber = int(str(n)[i])
        everyOtherNumber *= 2

        if (len(str(everyOtherNumber)) == 2):
            sum += int(str(everyOtherNumber)[0]) +\
                int(str(everyOtherNumber)[1])
        else:
            sum += everyOtherNumber

    for i in range(1, cardLen, 2):

        otherNumber = int(str(n)[i])
        sum += otherNumber

    if (sum % 10 == 0):
        return True
    else:
        return False

# Determines the type of card i.e. VISA, MASTERCARD, American Express


def typeOfCard(n):
    cardLen = len(str(n))

    # First  checks if the card length is valid

    if (validateLength(n)):

        if ((cardLen == 13) and (str(getCardNumber())[0] == "4")):
            return "VISA"

        elif (cardLen == 15):
            if ((firstTwoDigits(getCardNumber()) == "37") or
                    (firstTwoDigits(getCardNumber()) == "34")):
                    print("Hello")
                    return "AMEX"

        elif (cardLen == 16):
            if ((firstTwoDigits(getCardNumber()) == "51" or
                    firstTwoDigits(getCardNumber()) == "52" or
                    firstTwoDigits(getCardNumber()) == "53" or
                    firstTwoDigits(getCardNumber()) == "54" or
                    firstTwoDigits(getCardNumber()) == "55")):
                return "MASTERCARD"
            elif (str(getCardNumber())[0] == "4"):
                return "VISA"

        return "INVALID"

# Returns the first two numbers (as a string)


def firstTwoDigits(n):
    firstTwo = ""

    for i in range(2):
        firstTwo += str(n)[i]

    return firstTwo


# Main program

cardNumber = input("Enter card number: ")

# Variable to store the card type, string
typeOfCards = typeOfCard(cardNumber)

if (not validateCardNumber(getCardNumber())):
    print("INVALID")

print(typeOfCards)
