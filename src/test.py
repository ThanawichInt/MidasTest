def getQuestionPart(words):
    prev_word = []
    duplicated = []
    temp_duplicated = []
    answers = []
    prev_len = 0
    char_count_s = {}
    curr_count_s = {}
    char_count_f = {}
    curr_count_f = {}
    for i, word in enumerate(words):
        if i == 0:
            for char in word:
                prev_word.append(char)
                char_count_f[char] = char_count_f.get(char, 0) + 1
        if i != 0:
            for char in word:   
                if i == 1:
                    if char in prev_word[:prev_len]:
                        curr_count_f[char] = curr_count_f.get(char, 0) + 1
                        if char_count_f[char] >= curr_count_f[char]:
                            temp_duplicated.append(char)
                if i == 2:
                    if char in temp_duplicated:
                        curr_count_s[char] = curr_count_s.get(char, 0) + 1
                        if char_count_s[char] >= curr_count_s[char]:
                            duplicated.append(char)
        for temp_char in temp_duplicated:
            char_count_s[temp_char] = char_count_s.get(temp_char, 0) + 1 
        prev_len += len(word)
    unique_word = ''.join(duplicated)
    for word in words:
        answers.append((word.replace(unique_word, '')).replace(" ", ''))
    print(f'ANSWERS: {answers}')
    return answers