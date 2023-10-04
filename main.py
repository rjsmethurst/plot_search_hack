import capsearch as cap
import os
import re


for paper in os.listdir('papers'):
    print (paper)
    for p in os.listdir(f'papers/{paper}'):
        ps = p.split(".")[-1]
        if ps=='tex':
            print (p)