# Generated by Django 3.1 on 2020-08-10 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0002_auto_20200810_2020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todos',
            name='done',
            field=models.BooleanField(),
        ),
    ]
