Absolutely! Here’s a cheat sheet for regular expressions to help with common patterns and problems:

### Regular Expression Cheat Sheet

#### Basic Patterns

1. **Literal Characters**
   - **Pattern**: `a`
   - **Description**: Matches the character `a`.

2. **Any Character**
   - **Pattern**: `.`
   - **Description**: Matches any single character except newline (`\n`).

3. **Character Class**
   - **Pattern**: `[abc]`
   - **Description**: Matches any one of the characters `a`, `b`, or `c`.

4. **Negated Character Class**
   - **Pattern**: `[^abc]`
   - **Description**: Matches any character except `a`, `b`, or `c`.

5. **Range**
   - **Pattern**: `[a-z]`
   - **Description**: Matches any lowercase letter from `a` to `z`.

6. **Digit**
   - **Pattern**: `\d`
   - **Description**: Matches any digit (equivalent to `[0-9]`).

7. **Non-Digit**
   - **Pattern**: `\D`
   - **Description**: Matches any non-digit character.

8. **Whitespace**
   - **Pattern**: `\s`
   - **Description**: Matches any whitespace character (space, tab, newline, etc.).

9. **Non-Whitespace**
   - **Pattern**: `\S`
   - **Description**: Matches any non-whitespace character.

10. **Word Character**
    - **Pattern**: `\w`
    - **Description**: Matches any word character (alphanumeric plus `_`).

11. **Non-Word Character**
    - **Pattern**: `\W`
    - **Description**: Matches any non-word character.

#### Quantifiers

1. **Zero or More**
   - **Pattern**: `a*`
   - **Description**: Matches zero or more occurrences of `a`.

2. **One or More**
   - **Pattern**: `a+`
   - **Description**: Matches one or more occurrences of `a`.

3. **Zero or One**
   - **Pattern**: `a?`
   - **Description**: Matches zero or one occurrence of `a`.

4. **Exact Number**
   - **Pattern**: `a{2}`
   - **Description**: Matches exactly 2 occurrences of `a`.

5. **Range of Numbers**
   - **Pattern**: `a{2,4}`
   - **Description**: Matches between 2 and 4 occurrences of `a`.

6. **At Least Number**
   - **Pattern**: `a{2,}`
   - **Description**: Matches at least 2 occurrences of `a`.

#### Anchors

1. **Start of String**
   - **Pattern**: `^`
   - **Description**: Matches the start of a string.

2. **End of String**
   - **Pattern**: `$`
   - **Description**: Matches the end of a string.

3. **Word Boundary**
   - **Pattern**: `\b`
   - **Description**: Matches a word boundary (position between a word and a non-word character).

4. **Non-Word Boundary**
   - **Pattern**: `\B`
   - **Description**: Matches a position where `\b` does not match.

#### Groups and Capturing

1. **Capture Group**
   - **Pattern**: `(abc)`
   - **Description**: Captures the text matched by `abc`.

2. **Non-Capturing Group**
   - **Pattern**: `(?:abc)`
   - **Description**: Groups without capturing the matched text.

3. **Alternation**
   - **Pattern**: `a|b`
   - **Description**: Matches either `a` or `b`.

#### Examples

1. **Match Email Address**
   - **Pattern**: `/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/`
   - **Description**: Matches an email address and captures username and domain.

2. **Match Phone Number (US)**
   - **Pattern**: `/\((\d{3})\) (\d{3})-(\d{4})/`
   - **Description**: Captures the area code, central office code, and line number from a phone number.

3. **Match Digits**
   - **Pattern**: `/\d+/`
   - **Description**: Matches sequences of one or more digits.

4. **Match Words Starting with Capital Letters**
   - **Pattern**: `/\b[A-Z][a-z]*\b/g`
   - **Description**: Matches words that start with a capital letter.

5. **Match Capital Letters**
   - **Pattern**: `/[A-Z]/g`
   - **Description**: Matches all uppercase letters.

This cheat sheet covers common patterns and quantifiers used in regular expressions. If you need any more specific examples or explanations, feel free to ask!