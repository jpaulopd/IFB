from typing import List
import datetime
from dateutil.relativedelta import relativedelta

from pandas import DataFrame
import requests
from bs4 import BeautifulSoup
import time


class Scrapping:
    
    @staticmethod
    def generate_urls(starting_year: int, starting_month: int, ending_year: int, ending_month: int) -> List[int]:
        '''
            Retorna uma lista de urls válidas do site de acordo com o intervalo das datas inseridas.
            padrão da data: yyyymm
            padrão de url: http://www.nuforc.org/webreports/ndxe + yyyymm + .html
        '''
        urls = []

        starting_date = datetime.date(starting_year, starting_month, 1)
        ending_date = datetime.date(ending_year, ending_month, 1)

        while starting_date <= ending_date:
            urls.append(starting_date.strftime('http://www.nuforc.org/webreports/ndxe%Y%m.html'))
            starting_date += relativedelta(months=1)
        
        return urls

    @staticmethod
    def get_data(urls: List[str]) -> DataFrame:
        '''
            Retorna um dataframe contento os dados coletados
            das urls fornecidas.
        '''
        df = DataFrame(columns=['data', 'cidade', 'estado', 'formato', 'duracao', 'resumo', 'postado'])

        for url in urls:
            html_page = requests.get(url)
            soup = BeautifulSoup(html_page.text, "html.parser")

            table = soup.find('table').find_all('tr')

            collection = []
            for row in table[1:]:
                cells = row.find_all('td')
                collection.append(
                    {
                        'data': cells[0].text,
                        'cidade': cells[1].text,
                        'estado': cells[2].text,
                        'formato': cells[3].text,
                        'duracao': cells[4].text,
                        'resumo': cells[5].text,
                        'postado': cells[6].text
                    }
                )

                df_row = DataFrame(data=collection)
            df = df.append(df_row, ignore_index=True)
            time.sleep(2)

        return df

    
    @staticmethod
    def generate_df_from_dataset(starting_year: int, starting_month: int, ending_year: int, ending_month: int) -> DataFrame:
        urls = Scrapping.generate_urls(starting_year, starting_month, ending_year, ending_month)   
        return Scrapping.get_data(urls)
                

    @staticmethod
    def generate_csv_from_dataset(starting_year: int, starting_month: int, ending_year: int, ending_month: int, path: str) -> DataFrame:
        urls = Scrapping.generate_urls(starting_year, starting_month, ending_year, ending_month)
        df = Scrapping.get_data(urls)
        df.to_csv(path)