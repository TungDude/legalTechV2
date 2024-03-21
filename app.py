from flask import Flask, request, render_template, redirect
import pandas as pd
import numpy as np

app = Flask(__name__, template_folder="templates")

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/dashboard')
def dashboard():

    data = [
        ('01-02-67', 120),
        ('14-03-67', 202),
        ('05-05-67', 327),
        ('02-06-67', 380)
    ]

    labels = [row[0] for row in data]
    values = [row[1] for row in data]

    return render_template('dashboard.html', labels=labels, values=values)

@app.route('/estimator')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        method2 = False
        redirectIndex = False
        totalArea = 0
        subPlaneNo = int(request.form['subPlaneNo'])
        
        for i in range(subPlaneNo):
            try:
                subPlane = float(request.form['subPlane' + str(i)])
            except Exception as e:
                redirectIndex = True
                print(e)
                break
            if subPlane > 30:
                method2 = True
            if subPlane == 0:
                redirectIndex = True
            totalArea += subPlane
        
    except Exception as e:
        print(e)

    if redirectIndex:
        return render_template('index.html', ERROR = "กรุณากรอกข้อมูลให้ครบ")    
    
    if totalArea > 1000:
            method2 = True

    if redirectIndex:
        return redirect('/', ERROR = "กรุณากรอกข้อมูลให้ครบ")

    if not method2:
        return render_template('method1.html')
    
    else:
        return render_template('method2.html')

@app.route('/resultM1', methods=['POST'])
def result1():
    try:
        T = float(request.form['T'])
        t = float(request.form['t'])
        MAI = 9.5

        result = T * t * MAI * 0.001
    except Exception as e:
        print(e)
        return render_template('method1.html', ERROR = "กรุณากรอกข้อมูลให้ครบ")
    
    return render_template('result.html', result=result)

@app.route('/M2csv', methods=['POST'])
def M2image():
    # if len(request.files.getlist('fileUpload')) == 0:
    #     return "no file uploaded"

    files = request.files.getlist('fileUpload')

    parameters = 2

    return render_template('csvUpload.html', parameters=parameters)

@app.route('/resultM2', methods=['POST'])
def resultM2():

    return render_template('result.html', result=285.9475)
    # if 'file' not in request.files:
    #     return "No file part"

    # file = request.files['file']

    # if file.filename == '':
    #     return redirect('/')

    # extension = file.filename.split('.')[1]

    # if extension in ['csv', 'xlsx']:
    #     if extension == 'csv':
    #         df = pd.read_csv(file)
    #     else:
    #         df = pd.read_excel(file)
        
    #     CF = 0.47
    #     R = 0.2

    #     C_aboveGround = {}
    #     C_belowGround = {}
    #     CTT_i = {}
    #     a_i = {}
    #     A_i = {}


    #     # Step 1
    #     def sbl(coeff, d, h, power):
    #         return coeff * ((d * d * h) ** power)

    #     for i in set(list(df['i'])):
    #         criteria = [i]

    #         mask = df['i'].isin(criteria)
    #         layer = df[mask]

    #         a_i[i] = sum(layer['a'])
    #         A_i[i] = sum(layer['A'])

    #         sigma_M = 0
    #         for k, j in layer.iterrows():
    #             if j['j'] == 'ปาล์ม':
    #                 sigma_M += 6.666 + (12.826 * (j['H'] ** 0.5) * np.log(j['H']))
    #             elif j['j'] == 'เถาวัลย์':
    #                 sigma_M += 0.8622 * (j['D'] ** 2.0210)
    #             elif j['j'] == 'พรรณไม้ชายเลน':
    #                 sigma_M += sbl(0.05466, j['D'], j['H'], 0.945) + sbl(0.01579, j['D'], j['H'], 0.9124) + sbl(0.0678, j['D'], j['H'], 0.5806)
    #             elif j['j'] == 'ป่าดิบแล้ง':
    #                 sigma_M += sbl(0.0509, j['D'], j['H'], 0.919) + sbl(0.00893, j['D'], j['H'], 0.977) + sbl(0.0140, j['D'], j['H'], 0.669)
            
    #         C_aboveGround[i] = sigma_M * CF * 44 / 12

    #     # Step 2
    #     for key, value in C_aboveGround.items():
    #         C_belowGround[key] = value * R

    #     # Step 3
    #     for i in set(list(df['i'])):
    #         CTT_i[i] = (C_aboveGround[i] + C_belowGround[i]) * (A_i[i] / a_i[i])
        
    #     # Result
    #     result = sum(CTT_i.values())

    #     return render_template('result.html', result=result)

    # else:
    #     return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)