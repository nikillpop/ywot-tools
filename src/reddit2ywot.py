import praw
import sys
import re
import json
from pyperclip import copy


INDENT = unichr(160)*4;

def gridFromForest(subOrCom):
	accum = ""
	if(type(subOrCom) == praw.objects.Submission):
		for comment in subOrCom.comments:
			if(type(comment) == praw.objects.Comment):
				accum += gridFromForest(comment) + "\n"
		return accum
	elif(type(subOrCom) == praw.objects.Comment):
		accum += "-"+re.sub(r'\n+', '\n', subOrCom.body).strip() + "\n"
		comBlock = ""
		for comment in subOrCom.replies:
			if(type(comment) == praw.objects.Comment):
				comBlock += gridFromForest(comment) + "\n"
		for line in comBlock.split("\n"):
			accum += INDENT + line + "\n"
		return accum.strip()
	else:
		raise(Exception("Got a bad thing"))

if __name__ == "__main__":
	# Setupt crap
	ID = '2wnhyb'
	if(len(sys.argv) == 2):
		ID = sys.argv[1]
	print "Getting comments for sumbission with ID " + ID
	sys.stdout.flush()

	# Get user agent
	r = praw.Reddit("YourWorldOfText from Reddit discussions bot v1.0 created 2015-02-22")

	submission = r.get_submission(submission_id = ID)

	text = gridFromForest(submission)

	copy(json.dumps(text))