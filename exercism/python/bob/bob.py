def hey(phrase):
  lastchar = phrase[-1:]
  if (lastchar == '!'):
    return 'Woah, chill out!'
  elif (len(phrase) == 0):
    return 'Fine. Be that way!'
  else:
    return 'whatever'

def yell(phrase):
  return 'Woah, chill out!'



if __name__ == "__main__":
  print "hello"
  print hey("")
  print hey("hey!")
