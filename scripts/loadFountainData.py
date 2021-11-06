import csv
# import requests


class Building:
  def __init__(self, name):
    self.name = name
class Row:
  def __init__(self, building, location):
    self.building = Building(building)
    self.location = location
  
def postBuilding(building):
  building.id = 5

with open('fountainData.csv') as f:
  reader = csv.reader(f)

  # rows = []

  # for row in reader:
  #   rows.append(Row(row[0], row[1]))

  # buildings = []
  # for row in rows:
  #   buildings.append(row.building)

  # buildings = list(set(buildings))

  

  


  bds = []

  for row in reader:
    bds.append(row[0])


  bds = list(set(bds))

  # print(bds)

  buildings = []
  for b in bds:
    buildings.append(Building(b))

  for b in buildings:
    postBuilding(b)

  for row in reader:
    mb = None
    for b in buildings:
      if row[0] == b.name:
        mb = b
    print(mb)

  




 