import requests
from pprint import pprint


OVERPASS_ENDPOINT = "http://overpass-api.de/api/interpreter"


def get_node_way_relation_query(kind='"amenity"="parking"',
                                bbox='-37.992585,144.8340979,-37.7733637,144.916705',
                                timeout=25,
                                out='json'):
    # See also https://gis.stackexchange.com/questions/187447/understanding-overpassturbo-query
    # parking
    query = f"""
    [out:json][timeout:25];
    // gather results
    (
      // query part
      node[{kind}]({bbox});
      way[{kind}]({bbox});
      relation[{kind}]({bbox});
    );
    // print results
    out body;
    >;
    out skel qt;
    """
    response = requests.get(OVERPASS_ENDPOINT,
                            params={'data': query})
    result = response.json()
    pprint(result)
    return result


if __name__ == '__main__':
    print(get_node_way_relation_query())
