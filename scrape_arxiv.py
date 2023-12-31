# scrape the arXiv for 100 most cited papers in past 10 years

import wget
import tarfile
import os

# Test 2 papers
arxivnumbers = ['1804.09365','1807.06209']
#arxivnumbers = ['1502.01589','1807.06209','1307.6212','1303.5076','1804.09365','1801.02634','1609.04153','1710.05833','0805.2366','1407.7040','2012.01533','1710.05834','1807.06211','1906.11238','1502.02114','1607.03155','1609.04172','1305.3550','1710.00845','1405.2921','1604.01424','1207.6105','1303.5082','1804.09366','1208.0022','1604.08592','1903.07603','1301.7307','1401.4064','1804.10121','1303.5062','1310.2241','1409.3242','1312.4877','1412.1482','1509.05420','1503.04107','1703.02970','1110.4372','2001.01761','1703.00052','2006.12611','1807.06205','1205.5807','1311.2073','1503.02649','1401.5377','1303.5632','1501.01311','1403.4295','1710.05446','1707.03397','1711.05578','1502.01582','1301.6674','1212.6182','1707.03406','1404.2844','1904.02180','1402.0004','1211.2816','1912.05705','1906.11243','1208.2233','1707.03395','1912.05702','1301.0842','1804.04662','1703.10375','2012.05220','1906.11242','1804.08657','1907.04869','1906.11241','1405.3749','1301.3157','1607.08538','1606.05338','1309.2631','1507.02704','2208.00211','1211.5743','1510.04643','1707.03396','1610.06175','1707.03401','1303.4409','1411.4001','1409.7395','1607.03486','1504.02900','1702.06148','1303.5084','1305.2913','1501.01623','1502.01590','2112.04510','1811.12940','1806.07893','1812.04040']
urlbase = 'https://arxiv.org/e-print/'

for n in range(len(arxivnumbers)):
    num = str(arxivnumbers[n])
    if os.path.exists(num+'.tar.gz') or os.path.exists(num):
        print('already downloaded and unzipped ', num)
    else:
        print(urlbase+num)
        wget.download(urlbase+num, out=num+'.tar.gz')
    if os.path.exists(num)==0:
        try:
            tar = tarfile.open(num+'.tar.gz')
            tar.extractall(path=num)
            tar.close()
            os.remove(num+'.tar.gz')
        except:
            os.remove(num+'.tar.gz')
            print(num, " didn't come with source files")

    else:
        print('already unzipped ', num)

# move all new files to one file called papers
arxiv_files = []
for file in os.listdir():
    try:
        if file[4]=='.': # usually arXiv papers star with 4 digits?! TODO: is this true?
            arxiv_files.append(file)
    except:
        continue

for file in arxiv_files:
    os.rename(file, 'papers/'+file)

# Iterate through the file_list
for item in os.listdir("papers"):
    # TODO: remove all the unwanted other files - currently gives back some error... but it does work! 
    try:
        # Check if the item is a directory
        if os.path.isdir(item):
            # If it's a directory, skip it
            continue
        # If it's not a directory, delete the file
        else:
            os.remove(item)
    except:
        continue
