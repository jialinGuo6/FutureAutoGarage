'''
Resource 类，定义在 resources.py或 admin.py 也可以，通过重写 Meta 里的属性和添加自定义方法满足需求。
    自定义导入/导出字段（比如指定顺序，只导出部分字段）
    处理复杂字段如 ForeignKey、ManyToMany 或自定义导入逻辑
    配置导入时跳过重复、唯一性判定或数据清洗规则
'''
from import_export import resources
from .models import Tire

class TireResource(resources.ModelResource):
    class Meta:
        model = Tire
        # 这里可以自定义字段、导入设置等
        fields = ('id', 'tire_type', 'rim_size', 'size', 'load_speed', 'brand', 'tread_pattern', 
                  'sale_price', 'set_of_tire', 'environmental_fee', 'total_price', 'install_included', 
                  'stocked_at')
        # 严格指定导出顺序
        export_order = fields