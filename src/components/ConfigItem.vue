<template>
  <a-row functional class="conf-item">
    <a-col :span="$attrs.labelSpan || 4" class="conf-item__label">{{$attrs.label}}</a-col>
    <a-col :span="$attrs.contentSpan || 20"  class="conf-item__input">
      <slot></slot>
    </a-col>
  </a-row>
</template>
<style lang="scss" scoped>
.conf-item{
  height: 32px;
  line-height: 32px;
  margin-bottom: 14px;
}
</style>
