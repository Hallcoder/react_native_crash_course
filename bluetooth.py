import serial


ser = serial.Serial('COM10', 9600)
ser.write(b"2")