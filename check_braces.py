def check_braces(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    stack = []
    line_no = 1
    col_no = 1
    
    for i, char in enumerate(content):
        if char == '\n':
            line_no += 1
            col_no = 1
        else:
            col_no += 1
            
        if char in '{[(':
            stack.append((char, line_no, col_no))
        elif char in '}])':
            if not stack:
                print(f"Extra closing character '{char}' at line {line_no}, col {col_no}")
                return False
            top, l, c = stack.pop()
            if (char == '}' and top != '{') or (char == ']' and top != '[') or (char == ')' and top != '('):
                print(f"Mismatch: '{top}' at line {l}, col {c} closed by '{char}' at line {line_no}, col {col_no}")
                return False
                
    if stack:
        print("Unclosed characters remaining:")
        for char, l, c in stack:
            print(f"'{char}' at line {l}, col {c}")
        return False
        
    print("All braces, brackets, and parentheses match perfectly!")
    return True

check_braces("C:\\Users\\Owner\\.gemini\\antigravity\\scratch\\nandini-portfolio\\script.js")
