# Tool to read the caption from figures in a LaTeX document
import re
import os
import sys

def find_caption(file_path):
    """Given a file path, find and return all the strings that start with "caption{"

    Args:
        file_path (str): path where the .tex file is located

    Returns:
        list: list of words that start with "caption{"
    """

    # Open and read the .tex file
    with open(file_path, 'r', encoding='utf-8') as tex_file:
        tex_content = tex_file.read()

    # Define a regular expression pattern to match strings starting with "caption{"
    caption_pattern = re.compile(r'\\caption\{([^{}]*)\}')
    print (caption_pattern)

    # Find and extract all strings starting with "caption{"
    matches = caption_pattern.findall(tex_content)

    # Now, 'matches' will contain all the strings that start with "caption{"
    match_string = [re.sub(r"[^a-zA-Z\s\n]", "", match) for match in matches]

    return match_string


def find_arxiv_id(file_path):
    # will need this from the file path
    pass

def find_title(file_path):
    """Given the file path this functil will return a list of strings that start with "title{"
        TODO: finish docstring!
    Args:
        file_path (_type_): _description_

    Returns:
        _type_: _description_
    """
    # Open and read the .tex file
    with open(file_path, 'r', encoding='utf-8') as tex_file:
        tex_content = tex_file.read()

    # Define a regular expression pattern to match strings starting with "caption{"
    caption_pattern = re.compile(r'\\title\{([^{}]+)')

    # Find and extract all strings starting with "caption{"
    matches = caption_pattern.findall(tex_content)
    
    for match in matches:
        continue

    return re.sub(r"[^a-zA-Z\s]", "", match.split("\n")[0]) # it will remove all non-letter characters!


# Function to search for authors in a file
def find_authors_in_directory(directory_path):
    # Function to search for authors in a file
    def find_authors_in_file(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Define a regular expression pattern to search for authors
        author_pattern = re.compile(r'Author[s]*: ([\w\s,]+)')

        # Search for authors in the file content
        author_matches = author_pattern.findall(content)

        return author_matches

    # List to store author names
    authors_list = []
    # Iterate through files in the directory and its subdirectories
    for root, _, files in os.walk(directory_path):
        for file_name in files:
            file_path = os.path.join(root, file_name)

            # Search for authors in the file
            authors = find_authors_in_file(directory_path)

            # Append authors to the list
            authors_list.extend(authors)

    return authors_list
   


# Print the list of authors
print(authors_list)
    

def find_abstract(file_path):
    pass

def ingest_json_file(file_path):
    pass

