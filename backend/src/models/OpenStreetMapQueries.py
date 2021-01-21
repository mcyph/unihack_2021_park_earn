from geoalchemy2 import Geometry
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

# https://taginfo.openstreetmap.org/keys/parking#values


class Lake(Base):
    __tablename__ = 'lake'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    geom = Column(Geometry('POLYGON'))

