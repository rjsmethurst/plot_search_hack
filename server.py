from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
  return render_template('dotastro_ADS.html')

@app.route('/dotastro_ADS_search/')
def my_link():
  print ('I got clicked!')

  return 'Click.'

if __name__ == '__main__':
  app.run(debug=True)