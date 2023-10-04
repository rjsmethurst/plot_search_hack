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

    # Find and extract all strings starting with "caption{"
    matches = caption_pattern.findall(tex_content)

    # Now, 'matches' will contain all the strings that start with "caption{"
    match_string = [re.sub(r"[^a-zA-Z\s\n]", "", match) for match in matches]

    return match_string


def find_arxiv_id(file_path):
    # will need this from the file path
    pass

def find_title(file_path):
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


def find_authors(file_path):
    pass

def find_abstract(file_path):
    pass

def ingest_json_file(file_path):
    pass


path = "/Users/andytzanidakis/Desktop/desk/astro_research/open_source_tools/ads_hack/papers/gaia.tex"
print (find_title(path))
