import csv
import requests
import random


class Building:
  def __init__(self, name, latitude, longitude):
    self.name = name
    self.latitude = latitude
    self.longitude = longitude
class Row:
  def __init__(self, building, location):
    self.building = Building(building)
    self.location = location
  
def postBuilding(building):
  r = requests.post('http://localhost:8080/building',data={
    'latitude': building.latitude,
    'longitude': building.longitude,
    'name': building.name,
  })

  # print(r.json()['id'])
  building.id = r.json()['id']

def postWaterFountain(building, location, latitude, longitude):
  n = random.randint(0, 2)
  if building.name == 'Franklin DC':
    n = 2
  s = "GREEN"
  if n == 1:
    s = "YELLOW"
  elif n == 2:
    s = "RED"
  r = requests.post('http://localhost:8080/waterFountain', data={
    'buildingId': building.id,
    'status': s,
    'longitude': longitude,
    'latitude': latitude,
    'note': location
  })

  print(r.text)
  

with open('data.csv') as f:
  reader = csv.reader(f)

  # rows = []

  # for row in reader:
  #   rows.append(Row(row[0], row[1]))

  # buildings = []
  # for row in rows:
  #   buildings.append(row.building)

  # buildings = list(set(buildings))

  

  

  lines = []
  bds = []

  for row in reader:
    bds.append(row[0])
    lines.append(row)


  bds = list(set(bds))

  # print(bds)

  buildings = []
  for b in bds:
    lon = 0
    lat = 0
    for line in lines:
      if line[0] == b:
        lon = line[-1]
        lat = line[-2]
    buildings.append(Building(b, lat, lon))

  for b in buildings:
    postBuilding(b)
    # print(b.name, b.longitude, b.latitude)

  for row in lines:
    mb = None
    for b in buildings:
      if row[0] == b.name:
        mb = b
    postWaterFountain(mb, row[1], float(row[-2]), row[-1])
    # print(row)
    
    


  




 