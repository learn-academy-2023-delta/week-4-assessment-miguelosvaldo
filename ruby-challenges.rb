# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def numba(param)
    if param.even?
        "#{param} is even"
    
    elsif param.odd?
        "#{param} is odd"
    end
end
p numba(reposts1)
p numba(reposts2)
p numba(reposts3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
    string.delete("A,a,e,i,o,u")
end

p remove_vowels(beatles_album1)
p remove_vowels(beatles_album2)
p remove_vowels(beatles_album3)
 



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_it_palindrome(string)
    if string == string.reverse.capitalize
        "#{string} is a palindrome"
    elsif string != string.reverse.capitalize
        "#{string} is not palindrome"
    end

end


p is_it_palindrome(palindrome_test_case1)
p is_it_palindrome(palindrome_test_case2)
p is_it_palindrome(palindrome_test_case3)